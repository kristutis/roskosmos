import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import LoginModal from './LoginModal'
import ClientMenu from './menus/ClientMenu'
import GuestMenu from './menus/GuestMenu'

function NavBar() {   
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)      
    const [role, setRole] = useState('GUEST')
    // setRole('KLIENTAS')

    var uid = getCookie('uid')
    if (uid!='') { 
        fetch("http://localhost:8000/api/users/"+uid,
                {
                    method: 'GET',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json'
                    },                
                }
        ).then(res => res.json()).then(a => {
            console.log(a)
            // setRole(a)
        });           
    }

    const menu = () => {
        switch(role) {
            case 'KLIENTAS':
                return <ClientMenu/>
            default:
                return <GuestMenu onModalClick={setLoginModalIsOpen}/>
        }
    }    

    return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">            
        <Link to="/" className="navbar-logo"> 
            <img className="rounded-circle mr-2" src={logo} width="40" height="40"/>
            <a className="navbar-brand">ROSKOSMOS</a>
        </Link> 
        
        {menu()}
        <LoginModal isOpen={loginModalIsOpen} toClose={setLoginModalIsOpen}/>
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

// function stringToBoolean(string) {
//     switch(string.toLowerCase().trim()){
//         case "true": case "yes": case "1": return true;
//         case "false": case "no": case "0": case null: return false;
//         default: return Boolean(string);
//     }
// }