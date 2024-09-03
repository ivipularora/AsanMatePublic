import React, { useState } from 'react'

import { poseInstructions } from '../../utils/data'

import { poseImages } from '../../utils/pose_images'

import './Instructions.css'
import Navbar from '../Navbar/Navbar'

export default function Instructions({ currentPose }) {

    const [instructions, setInsntructions] = useState(poseInstructions)

    return (
        <> 
        <div className="instructions-container">
           <img 
                className="pose-demo-img"
                src={poseImages[currentPose]}
            />
            <ul className="instructions-list">
                {instructions[currentPose].map((instruction) => {
                    return(
                        <li className="instruction">{instruction}</li>
                    )
                    
                })}
            </ul>
           
        </div>
        </> 
    )
}
