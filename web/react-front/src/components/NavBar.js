// import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'

function NavBar() {
    const role = "asd"


    return (
        <>
        <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">            
            <Link to="/" className="navbar-logo"> 
                <img class="rounded-circle" href="#" src={logo} width="40" height="40"/>
                ROSKOSMOS
            </Link> 

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">                    
                    <li class="nav-item mr-2">
                        <Link to="/profile" className="navbar-logo">
                            <button onclick="document.getElementById('id01').style.display='block'" type="submit" class="btn btn-secondary">Prisijungti</button>
                        </Link>  
                    </li>
                    <li class="nav-item dropdown">
                        <Link to="/" className="navbar-logo">
                            <button type="submit" class="btn btn-secondary">Registruotis</button>
                        </Link> 
                    </li>
                </ul>
            </div>
        </nav>      
        </>
    )
}

export default NavBar
