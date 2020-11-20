import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import LoginModal from './LoginModal'
import ClientMenu from './menus/ClientMenu'
import GuestMenu from './menus/GuestMenu'
import SignupModal from './SignupModal'

function NavBar() {   
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)    
    const [signupModalIsOpen, setSignupModalIsOpen] = useState(false)  
    const [role, setRole] = useState('GUEST')
    // setRole('KLIENTAS')    

    const menu = () => {
        var uid = getCookie('uid')
        if (uid!='') {             
            fetch(window.backend+"/users/"+uid,
                    {
                        method: 'GET',
                        cache: 'no-cache',
                        headers: {
                            'Content-Type': 'application/json'
                        },                
                    }
            ).then(res => res.json()).then(a => {
                setRole(a.role)
            });           
        }

        switch(role) {
            case 'KLIENTAS':
                return <ClientMenu/>
            default:
                return <GuestMenu onModalClick={setLoginModalIsOpen} onSignUpClick={setSignupModalIsOpen}/>
        }
    }    

    return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">            
        <Link to="/" className="navbar-logo"> 
            <img className="rounded-circle mr-2" src={logo} width="40" height="40"/>
            <span className="navbar-brand">ROSKOSMOS</span>
        </Link> 
        
        {menu()}
        <LoginModal isOpen={loginModalIsOpen} toClose={setLoginModalIsOpen}/>
        <SignupModal isOpen={signupModalIsOpen} toClose={setSignupModalIsOpen}/>
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