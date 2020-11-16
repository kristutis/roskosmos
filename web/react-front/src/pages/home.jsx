import React from 'react'
import video from '../videos/frontpage.mp4'
import './Home.css'

export default function Home() {
    return (
        <div>     
            <video width="10" height="10" src={video} autoPlay loop muted />
            <h1>hi</h1>
        </div>
    )
}
