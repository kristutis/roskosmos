import React from 'react'
import DisplayAllTrenerisCards from '../components/TrenerioCard'
import './Treneriai.css'

//Gyvenime nėra nieko neįmanoma... Vienintelis klausimas tik, ar užteks drąsos siekti tai, ko iš tiesų nori?

export default function Treneriai() {      
    return (
        <div className="treneriai-div">
            <br></br>
            <h1>Mūsų komanda</h1><br></br>
            <DisplayAllTrenerisCards/>
            <br></br><br></br>
        </div>
    )
}
