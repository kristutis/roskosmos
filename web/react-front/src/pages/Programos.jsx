import React, {useEffect, useState} from 'react'
import './Programos.css'
import { Link } from 'react-router-dom'

export default function Programos() {      
    const [progs, setProg] = useState(null)

    const uid = getCookie('uid')    


    useEffect(() => {
        fetch(window.backend+"/programs/"+uid,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },                
                })
        .then(res => res.json())
        .then(a => {
            setProg(a)       
        });                     
    }, [])

    if (uid==='') {
        return <h1>UNAUTHORISED</h1>
    }

    return (
        <div className="isorinis-divas">
            <br></br><br></br>
            <Link to="/addprogram" className="navbar-logo">
                <span className="btn btn-info" >Nauja programa <span className="sr-only">(current)</span></span>
            </Link>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Pavadinimas</th>
                        <th scope="col">Trukmė</th>
                        <th scope="col">Kaina</th>
                        <th scope="col">Aprašymas</th>
                    </tr>
                </thead>
                <tbody>
                    {progs ? progs.map((p, index)  => 
                    <tr>
                        <td>{p.pavadinimas}</td>
                        <td>{p.trukme}</td>
                        <td>{p.kaina}</td>
                        <td>{p.aprasymas}</td>
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
