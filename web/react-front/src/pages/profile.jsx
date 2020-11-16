import React from 'react'
import './Profile.css'

export default function Profile() {
    return (
        <div>
            <br></br><br></br>
            <h2 className="p-h2">User Profile Card</h2>

            <div className="card">
            <img src="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg" alt="John" />
            <h1>John Doe</h1>
            <p className="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <div className="prifile-div">
                <a className="profile-a"><i className="fa fa-dribbble"></i></a> 
                <a className="profile-a"><i className="fa fa-twitter"></i></a>  
                <a className="profile-a"><i className="fa fa-linkedin"></i></a>  
                <a className="profile-a"><i className="fa fa-facebook"></i></a> 
            </div>
            <p><button className="profile-button">Contact</button></p>
            </div>
        </div>        
    )
}
