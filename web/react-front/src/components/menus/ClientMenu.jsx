import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../../images/profile-picture.png'
import './ClientMenu.css'

function ClientMenu() {    
    const [vardas, setVardas] = useState('')
    const [photoUrl, setPhotoUrl] = useState(profilePic)

        
    useEffect(() => {
        var uid = getCookie('uid')
        fetch(window.backend+"/users/"+uid,
                {
                    method: 'GET',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json'
                    },                
                }
        ).then(res => res.json()).then(a => {
            setVardas(a.vardas)
            if (a.profilio_foto!=='DEFAULT') {
                setPhotoUrl(a.profilio_foto)
            }            
        });       
    }, [])

    return (
        <>        
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/treneriai" className="navbar-logo">
                            <span className="nav-link" >Treneriai <span className="sr-only">(current)</span></span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sales-rezervacija" className="navbar-logo">
                            <span className="nav-link" >Rezervuoti salės laiką <span className="sr-only">(current)</span></span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/prekes" className="navbar-logo">
                            <span className="nav-link" >Prekių katalogas <span className="sr-only">(current)</span></span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saskaitos" className="navbar-logo">
                            <span className="nav-link" >Sąskaitos <span className="sr-only">(current)</span></span>
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
                        <span className="nav-link dropdown-toggle dropint" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="text-capitalize navbar-brand">{vardas}</span>
                            <img src={photoUrl} width="50" height="50" className="mr-2" alt="" />
                        </span>                    
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <Link to="/profile">
                                <span className="dropdown-item dropint" >Naudotojo profilis</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to="/">
                                <span className="dropdown-item dropint" onClick={clearCookie}>Atsijungti</span>
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
    document.cookie = "uid="
    window.location.reload(false);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}