import React from 'react'
import DisplayAllTrenerisCards from '../components/TrenerioCard'
// import TrenerioCard from '../components/TrenerioCard'
import './Treneriai.css'

export default function Treneriai() {
    var treneriukai = []
    
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
