import React from 'react'
import DisplayAllTrenerisCards from '../components/TrenerioCard'
import './Treneriai.css'

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
