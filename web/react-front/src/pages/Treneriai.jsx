import React from 'react'
import DisplayAllTrenerisCards from '../components/TrenerioCard'
// import TrenerioCard from '../components/TrenerioCard'
import './Treneriai.css'

export default function Treneriai() {
    // var treneriukai = []
    
    fetch(window.backend+"/trainers",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },                
        }
    ).then(res => res.json()).then(a => {        
        for (let trainer of a) {           
            var treneriukas = {
                vardas: trainer.user.vardas,
                foto: trainer.user.profilio_foto,
                moto: trainer.moto,               
            }
            treneriukai.push(treneriukas)     
        }
    });            

    var treneriukas1= {
        vardas: "Akvilė",
        foto: "https://randomuser.me/api/portraits/women/72.jpg",
        moto: "“Nėra nieko, kas tave stabdytų, išskyrus tave patį”",
    }

    var treneriukas2= {
        vardas: "Dovydas",
        foto: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
        moto: "“Juk taip smagu daryti tai, kas neįmanoma!”",
    }

    var treneriukas3= {
        vardas: "Raminta",
        foto: "https://randomuser.me/api/portraits/women/59.jpg",
        moto: "“Gyvenime nėra nieko neįmanoma... Vienintelis klausimas tik, ar užteks drąsos siekti tai, ko iš tiesų nori?”",
    }


    var treneriukai = ([treneriukas1, treneriukas2, treneriukas3])
    console.log(treneriukai)
    // https://thispersondoesnotexist.com/
    // Nemažink savo tikslų, didink pastangas.
    return (
        <div className="treneriai-div">
            <br></br>
            <h1>Mūsų komanda</h1><br></br>
            <DisplayAllTrenerisCards treneriai={treneriukai}/>
            <br></br><br></br>
        </div>
    )
}
