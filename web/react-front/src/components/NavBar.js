import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import defaultProfilePhoto from '../images/profile-picture.png'

function NavBar() {
    const role = "asd"
    let profilePic = defaultProfilePhoto;


    return (
        <>
        { role=="klientas" ?         
            <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">            
                <Link to="/" className="navbar-logo"> 
                    <img class="rounded-circle mr-2" src={logo} width="40" height="40"/>
                    <a class="navbar-brand">ROSKOSMOS</a>
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
            :
            <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">            
                <Link to="/" className="navbar-logo"> 
                    <img class="rounded-circle mr-2" src={logo} width="40" height="40"/>
                    <a class="navbar-brand">ROSKOSMOS</a>
                </Link> 

                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" >Treneriai <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Rezervuoti salės laiką <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Prekių katalogas <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Sąskaitos <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">                    
                        <li class="nav-item">
                            <a class="nav-link" >Right</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={profilePic} width="30" height="30"/>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" >Naudotojo profilis</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" >Atsijungti</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
}
        </>
    )
}

export default NavBar
