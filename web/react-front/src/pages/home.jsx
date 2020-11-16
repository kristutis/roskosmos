import React from 'react'
import video from '../videos/frontpage.mp4'

export default function Home() {
    return (
        <div>            
            <video src={video} autoPlay muted loop />
            <h1>hi</h1>
        </div>        
    )
}
