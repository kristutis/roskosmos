import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import ClientMenu from './menus/ClientMenu'
import GuestMenu from './menus/GuestMenu'
import Modal from 'react-modal';

function NavBar() {
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)

    var state= stringToBoolean((getCookie("state")))
    console.warn(state)
    let role = "KLIENTAS"
    if (state) {
        role = "KLIENTAS"
    } else {
        role = "asd"
    }

    const menu = () => {
        switch(role) {
            case "KLIENTAS":
                return <ClientMenu/>
            default:
                return <GuestMenu loginModal={setLoginModalIsOpen}/>
        }
    }    

    return (
    <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">            
        <Link to="/" className="navbar-logo"> 
            <img class="rounded-circle mr-2" src={logo} width="40" height="40"/>
            <a class="navbar-brand">ROSKOSMOS</a>
        </Link> 
        
        {menu()}
        <Modal isOpen={loginModalIsOpen} >
            <h1>hello</h1>
            <p>ppl</p>
            <button onClick={() => setLoginModalIsOpen(false)}></button>
        </Modal >
    </nav>
    )     
}

export default NavBar


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function stringToBoolean(string) {
    switch(string.toLowerCase().trim()){
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(string);
    }
}