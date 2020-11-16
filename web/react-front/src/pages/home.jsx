import React from 'react'
import video from '../videos/frontpage.mp4'
import './Home.css'

export default function Home() {
    return (
        <div class="home-container">     
            <video width="10" height="10" src={video} autoPlay loop muted />
            <h1>welcome, stranger</h1>            
        </div>
    )
}
