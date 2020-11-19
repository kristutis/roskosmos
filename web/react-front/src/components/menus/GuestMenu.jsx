import { get } from 'jquery';
import React from 'react'
import { Link } from 'react-router-dom'

function GuestMenu(props) {
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
                        <button type="submit" className="btn btn-secondary" onClick={() => props.onModalClick(true)} >Prisijungti</button>
                </li>
                <li class="nav-item dropdown">
                        <button type="submit" className="btn btn-secondary">Registruotis</button>
                </li>
            </ul>
        </div>
    )
}

export default GuestMenu