import React from 'react'
import video from '../videos/frontpage.mp4'
import './Home.css'

export default function Home() {
    return (
        <div class="home-container">     
            <video width="10" height="10" src={video} autoPlay loop muted />
            <br></br><br></br>
            <h1>WELCOME, STRANGER</h1>            
            <p>Get up and start pumping!</p>
        </div>
    )
}
