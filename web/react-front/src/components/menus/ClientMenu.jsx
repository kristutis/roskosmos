import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../../images/profile-picture.png'

function ClientMenu() {
    return (
        <>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/profile" className="navbar-logo">
                        <a className="nav-link" >Treneriai <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="navbar-logo">
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
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">                    
                <li className="nav-item">
                    <a className="nav-link" >Right</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={profilePic} width="30" height="30"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" >Naudotojo profilis</a>
                            <div className="dropdown-divider"></div>
                        <a className="dropdown-item" >Atsijungti</a>
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}

export default ClientMenu
