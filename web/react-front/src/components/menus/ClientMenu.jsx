import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../../images/profile-picture.png'
import './ClientMenu.css'

function ClientMenu() {    

    const vardas="Tautvydas"

    return (
        <>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/treneriai" className="navbar-logo">
                        <a className="nav-link" >Treneriai <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/sales-rezervacija" className="navbar-logo">
                        <a className="nav-link" >Rezervuoti salės laiką <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="navbar-logo">
                        <a className="nav-link" >Prekių katalogas <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="navbar-logo">
                        <a className="nav-link" >Sąskaitos <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="navbar-collapse">
            <ul className="navbar-nav ml-auto">                    
                {/* <li className="nav-item">
                    <a className="nav-link" >Right</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >Left</a>
                </li> */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle dropint" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {vardas}&nbsp;&nbsp;
                        <img src={profilePic} width="30" height="30" className="mr-2"/>
                    </a>                    
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <Link to="/profile">
                            <a className="dropdown-item dropint" >Naudotojo profilis</a>
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/">
                            <a className="dropdown-item dropint" onClick={clearCookie}>Atsijungti</a>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}

export default ClientMenu

function clearCookie() {
    document.cookie = "state="
    window.location.reload(false);
}