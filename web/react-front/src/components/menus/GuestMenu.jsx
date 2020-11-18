import { get } from 'jquery';
import React from 'react'
import { Link } from 'react-router-dom'

function GuestMenu(props) {
    document.cookie = "state=false";
    // console.warn(stringToBoolean((getCookie("state"))))
    // console.warn(x)    
    function setState() {
        var state= stringToBoolean((getCookie("state")))
        // console.warn(state)
        state=!state
        // console.warn(state)
        // console.warn("state="+state)
        document.cookie = "state="+state
        // console.warn(stringToBoolean((getCookie("state"))))
        window.location.reload(false);
    }

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
                    <Link to="/" className="navbar-logo">
                        <button type="submit" className="btn btn-secondary" onClick={setState} onClick={() => props.loginModal(true)} >Prisijungti</button>
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