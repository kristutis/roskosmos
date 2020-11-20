import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './TrenerioCard.css'

export default function DisplayAllTrenerisCards() {
    const [treneriai, setTreneriai] = useState([])

    useEffect(() => {
        var trs = []
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
                trs.push(treneriukas)     
            }
            setTreneriai(trs)        
        });             
    }, [])
    
    

    return (
        <div className="ts container-fluid d-flex justify content-center">
            <div className="row">
                    {/* optional */}
                    {treneriai.map((t, index)  => 
                    <div className="col-md-4 my-2" key={index}>
                        <TrenerioCard imgsrc={t.foto} title={t.vardas} text={t.moto}/>
                    </div>
                    )}
               
            </div>
        </div>
    )
}

function TrenerioCard(props) {
    return (
        <div className="card text-center shadow my-2">
            <div className="trenerio-card"></div>
            <div className="overflow">
                <img className="card-img-top" src={props.imgsrc} alt="" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.text}</p>
                <Link to="/treneriai/treneris"> 
                    <span className="btn btn-outline-success">Plačiau</span>
                </Link>
            </div>            
        </div>
    )
}