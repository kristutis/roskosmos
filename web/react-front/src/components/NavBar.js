// import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpg'

function NavBar() {
    const role = "klientas"

    if (role=="klientas") {
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
                </div>      
            </nav>
    
            
            </>
        )
    }

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
                <button>prisijungti</button>
            </div>      
        </nav>        
        </>
    )
}

export default NavBar
