import React, { useEffect, useState } from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import { auth, fs } from '../../config/config';

export default function About() {
    function useGetuserid() {
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUid(user.uid);
                }
            })
        }, []);
        return uid;
    }
    const uid = useGetuserid();

    //getting current user
    function GetCurrentUser() {
        const [user, setUser] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    fs.collection('users').doc(user.uid).get().then(snapshot => {
                        setUser(snapshot.data().FullName)
                    })
                }
                else {
                    setUser(null);
                }
            })
        })
        return user;
    }
    const user = GetCurrentUser();
    return (
        <div className="about-container">
            <Navbar user={user} />
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    Welcome to AI Yoga Trainer, aimed at advancing AI-driven human activity recognition through yoga pose analysis.AI Yoga Trainer utilizes state-of-the-art technologies, combining TensorFlow with pre-trained MoveNet models to accurately predict and analyze key body points in yoga poses. By leveraging machine learning, this project provides real-time feedback on pose accuracy, enhancing the yoga learning experience.

                    Key Features:
                    Pose Detection: TensorFlow MoveNet models accurately predict and track key body points in real-time yoga images.Pose Classification: A custom neural network built on TensorFlow processes these keypoints to classify yoga poses with precision.
                    Real-time Feedback: Visual feedback system highlights correct pose execution by turning virtual skeletons green.Open Source: Accessible source code on GitHub for developers to learn, customize, and contribute.

                    How It Works:AI Yoga Trainer operates through a two-step process:
                    Keypoint Prediction: TensorFlow MoveNet models detect and predict the coordinates of body keypoints in yoga poses.Pose Classification: A custom neural network processes these keypoints to classify and evaluate yoga poses, providing instant feedback on posture correctness.

                    Who Is This For?
                    Developers: Ideal for AI enthusiasts and developers interested in human activity recognition and pose analysis applications.
                    Yoga Enthusiasts: Enhances yoga practice by offering real-time feedback and guidance on posture correctness.

                    Whether you're exploring AI applications in fitness or seeking to contribute to the development of AI-enhanced yoga tools, AI Yoga Trainer invites you to delve into the intersection of AI and yoga practice.
                </p>

            </div>
        </div>
    )
}
