// import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpg'

function NavBar() {
    const role = "asd"


    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">                    
                    <img className="rounded-circle" src={logo} width="40" height="40"/>
                    ROSKOSMOS
                </Link>
                <Link to="/profile" className="navbar-logo">                    
                    <img className="rounded-circle" src={logo} width="40" height="40"/>
                    ROSKOSMOS
                </Link>
                
                {role=="klientas" ? 
                <div>
                    <button>prisijungti</button>
                </div> : 
                <div>
                    neprisijunges
                </div>}
            </div>      
        </nav>        
        </>
    )
}

export default NavBar
