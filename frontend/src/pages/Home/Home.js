import React, { useEffect, useState } from 'react'

import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import { auth, fs } from '../../config/config';

export default function Home() {
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
        <div className='home-container'>
          

          <Navbar user={user}/>
            <div className="home-main">
               
                <div className="btn-section"> 
                 <h1 className="description">ASANA<br/>MATE</h1>
                    {/* <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                    <Link to='/tutorials'>
                        <button
                            className="btn start-btn"
                        >Tutorials</button>
                    </Link> */}

                </div>
                
                <div className='image'>
                    <img src='./yogasan.png' className='yoga-img'/>
                </div>
            </div>
        </div>
    )
}

