import React from 'react'
import TrainerComments from '../components/TrainerComments'
import './Treneris.css'



export default function Treneris(props) {
    const trenerioDd = props.match.params.id
    console.log(isLoggedIn())

    return (
        <div className="first-div">
            <br></br><h1>Rimulis</h1><br></br>
            <div className="ts container-fluid d-flex justify content-center">
                <div className="row">
                    <div className="col-md-6">                        
                        <img width="100%" height="700" alt=""  src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"/>
                    </div>
                    <div className="col-md-6">        
                        <TrainerComments/>
                        <h1>Ivertinimas</h1>
                        <br></br>
                        <h4>komentaras</h4>
                        <input width="100" height="100" type="text"></input>
                    </div>           
                </div>
            </div> 
            <br></br><br></br><br></br><br></br>
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