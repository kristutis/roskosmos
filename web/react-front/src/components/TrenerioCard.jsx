import React from 'react'
import { Link } from 'react-router-dom'
import './TrenerioCard.css'

const profiliofoto = "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
const fraze = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eveniet harum accusamus sequi quam totam laboriosam tempore vitae inventore illo?"
const vardas = "Dovydas"

export default function DisplayAllTrenerisCards(props) {
    const ts = props.treneriai //array
    return (
        <div className="ts container-fluid d-flex justify content-center">
            <div className="row">
                {ts.map(t => 
                    <div className="col-md-4 my-2">
                        <TrenerioCard imgsrc={t.foto} title={t.vardas} text={t.moto}/>
                    </div>
                    )}

                    {/* optional */}
                    {ts.map(t => 
                    <div className="col-md-4 my-2">
                        <TrenerioCard imgsrc={t.foto} title={t.vardas} text={t.moto}/>
                    </div>
                    )}
                    {ts.map(t => 
                    <div className="col-md-4 my-2">
                        <TrenerioCard imgsrc={t.foto} title={t.vardas} text={t.moto}/>
                    </div>
                    )}
                    {/* optional */}
            </div>
        </div>
    )
}

function TrenerioCard(props) {
    return (
        <div className="card text-center shadow my-2">
            <div className="trenerio-card"></div>
            <div className="overflow">
                <img className="card-img-top" src={props.imgsrc} />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.text}</p>
                <Link to="/treneriai/treneris"> 
                    <a href="#" className="btn btn-outline-success">Plačiau</a>
                </Link>
            </div>            
        </div>
    )
}