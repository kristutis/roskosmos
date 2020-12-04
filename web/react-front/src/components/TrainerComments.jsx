import React from 'react'

const source="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"

export default function TrainerComments(props) {
    if (props.comms==null) {
        return (
            <div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr><th>Atsiliepimų kol kas nėra. Būkite pirmas!</th></tr>
                    </thead>
                </table>
            </div>
        )
    }    

    return (
        <div>
            <table className="table table-striped table-dark">
                <thead>
                    <tr >
                    <th scope="col">#</th>                    
                    <th scope="col">Data</th>      
                    <th scope="col">Vartotojas</th>  
                    <th scope="col">Vardas</th>
                    <th scope="col">Atsiliepimas</th>                                 
                    </tr>
                </thead>
                <tbody>
                    {props.comms.map((c, index) => 
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{c.data}</td>
                        <td><img className="rounded-circle img-thumbnail" src={c.foto} alt="" width="70" height="70"/></td>
                        <td>{c.vardas}</td>
                        <td>{c.komentaras}</td>                        
                    </tr>
                    )}                                                         
                </tbody>
            </table>
        </div>
    )
}
