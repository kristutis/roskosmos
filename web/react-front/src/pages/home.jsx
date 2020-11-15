import React from 'react'
import video from '../videos/frontpage.mp4'

export default function Home() {
    return (
        <div>            
            {/* <video controls={false} autoplay>
                <source src={video} type="video/mp4"/>
            </video> */}
            <iframe width="100%" height="1000" src={video} autoplay muted loop></iframe>
            <h1>hi</h1>
        </div>        
    )
}
