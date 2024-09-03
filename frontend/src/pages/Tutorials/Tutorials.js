import React, { useEffect, useState } from 'react'
import { auth, fs } from '../../config/config';

import './Tutorials.css'

import { tutorials, fixCamera } from '../../utils/data'
import Navbar from '../../components/Navbar/Navbar'

export default function Tutorials() {
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
        <div className="tutorials-container">
            <Navbar user={user} />
            <h1 className="tutorials-heading">Basic Tutorials</h1>
            <div className="tutorials-content-container">
                {tutorials.map((tutorial) => (
                    <p className="tutorials-content">{tutorial}</p>
                ))}
            </div>
            <h1 className="tutorials-heading">Camera Not Working?</h1>
            <div className="tutorials-content-container">
                {fixCamera.map((points) => (
                    <p className="tutorials-content">{points}</p>
                ))}
            </div>

        </div>
    )
}
