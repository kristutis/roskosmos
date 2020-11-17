import React from 'react'
import { Link } from 'react-router-dom'

function GuestMenu() {
    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/treneriai" className="navbar-logo">
                        <a className="nav-link" >Treneriai <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">                    
                <li className="nav-item mr-2">
                    <Link to="/profile" className="navbar-logo">
                        <button type="submit" className="btn btn-secondary">Prisijungti</button>
                    </Link>  
                </li>
                <li class="nav-item dropdown">
                    <Link to="/" className="navbar-logo">
                        <button type="submit" className="btn btn-secondary">Registruotis</button>
                    </Link> 
                </li>
            </ul>
        </div>
    )
}

export default GuestMenu
