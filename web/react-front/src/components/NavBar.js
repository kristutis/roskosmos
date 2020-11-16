import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import ClientMenu from './menus/ClientMenu'
import GuestMenu from './menus/GuestMenu'

function NavBar() {
    const role = "asasdasd"

    const menu = () => {
        switch(role) {
            case "KLIENTAS":
                return <ClientMenu/>
            default:
                return <GuestMenu/>
        }
    }
    

    return (
    <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">            
        <Link to="/" className="navbar-logo"> 
            <img class="rounded-circle mr-2" src={logo} width="40" height="40"/>
            <a class="navbar-brand">ROSKOSMOS</a>
        </Link> 
        {menu()}
    </nav>
    )     
}

export default NavBar
