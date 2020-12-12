import React, {useState, useEffect} from 'react'
import './Treneris.css'


export default function Sekmingas(props) {

    if (isLoggedIn()===false) {
        return 'unauthorised'
    }

    return (
        <div className="first-div" margin="auto">
            <h1 text-align="center" style={{color: "white", marginTop: 100}}>Prekė užsakyta sėkmingai!</h1>
        </div>
    )
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

function isLoggedIn() {
    const c = getCookie('uid')
    if (c==='') {
        return false
    }
    return true
}

