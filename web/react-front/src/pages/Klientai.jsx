import React, {useEffect, useState} from 'react'
import './Klientai.css'
import {Link, useLocation} from "react-router-dom";

export default function Klientai() {      
    const [clients, setClients] = useState(null)

    const uid = getCookie('uid')    


    useEffect(() => {
        fetch(window.backend+"/clients/"+uid,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },                
                })
        .then(res => res.json())
        .then(a => {
            setClients(a)     
            console.log(a)  
        });                     
    }, [])

    if (uid==='') {
        return <h1>UNAUTHORISED</h1>
    }

    return (
        <div className="isorinis-divas">
            <br></br><br></br>
            
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Kliento vardas</th>
                        <th scope="col">Kliento pavardė</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {clients ? clients.map((c, index)  => 
                    <tr>
                        <td>{c.vartotojas_name}</td>
                        <td>{c.vartotojas_sur}</td>
                        <td>
                            {<Link to={{pathname:"/mail", data:c.vartotojas_mail}} className="navbar-logo">
                            <span className="btn btn-info" >Siųsti laišką<span className="sr-only">(current)</span></span>
                            </Link>}
                        </td>
                    </tr>
                    ) : null}
                </tbody>
            </table>
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
