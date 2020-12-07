import { render } from '@testing-library/react'
import React, {useEffect, useState} from 'react'
import './Mail.css'
import {Link, useLocation} from "react-router-dom";

export default function Mail() {
    let recieved = useLocation();

    //console.log(recieved);

    const [tema, setTema] = useState('')
    const [tekstas, setTekstas] = useState('')

    const uid = getCookie('uid')   
    //const [program, setProgram] = useState({})



    function Send(){
        let emailas=recieved.data
        var mail={
            email: emailas,
            pavadinimas: tema,
            zinute: tekstas
        }


        fetch(window.backend+"/users/"+uid,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },                          
                })
        .then(res => res.json())
        .then(a => {
            emailas=a.email
            let emailoInfo = mail
            console.log(emailoInfo)    
        
            fetch("http://localhost/php_emailo_rest_api/api.php",
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },                          
                        body: JSON.stringify(emailoInfo)  
                    })
            .then(res => res.json())
            .then(b => {
                console.log(b)  
            });       
            console.info(emailas)
    
    
        });       
        // console.log(emailas)
    }

    useEffect(() => {
        setIsLoggedIn(true)                 
    }, [])

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    if (!isLoggedIn) {
        return <h1>UNAUTHORISED</h1>
    }
    
    return (
        <div>
            <br></br><br></br>
            <div className="row base-div bordered-div">
                    <div className="col-md-12 second-profile-div">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Laiško siuntimas: </h1>
                                <br></br>
                                <h5>Tema: </h5>
                                <input type="text" className="w-175 form-control" onChange={e => setTema(e.target.value)}/> 
                                <br></br>
                                <h5>Tekstas: </h5>
                                <textarea rows="6" className="w-175 form-control" onChange={e => setTekstas(e.target.value)}/>
                            </div>                                          
                        </div> 
                        <hr/>
                        <button type="button" className="btn btn-info" onClick={() => Send()}>Siųsti</button>
                    </div>
            </div>
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