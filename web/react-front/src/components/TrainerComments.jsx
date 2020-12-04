import React, {useEffect, useState} from 'react'
import defaultPic from '../images/profile-picture.png'

export default function TrainerComments(props) {
    const [komentarai, setKomentarai] = useState([])    

    useEffect(() => {
        const comms=props.comms
        // console.log(comms)
        var updatedComms=[]
        fetch(window.backend+"/users",
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },                
                    })
            .then(res => res.json())
            .then(a => {
                for (let user of a) {
                    for (let comment of comms) {
                        if (comment.fk_komentuotojo_id===user.id) {
                            let c = {
                                vardas: user.vardas,
                                foto: user.profilio_foto,
                                data: comment.data.slice(0,10),
                                komentaras: comment.komentaras,
                            }
                            if (c.foto=="DEFAULT") {
                                c.foto=defaultPic
                            }
                            updatedComms.push(c)
                        }
                    }
                }    
                setKomentarai(updatedComms)          
        });        
    }, [])
    
    if (props.comms.length==0) {
        console.log(true)
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
                    {komentarai ? komentarai.map((c, index) => 
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{c.data}</td>
                        <td><img className="rounded-circle img-thumbnail" src={c.foto} alt="" width="70" height="70"/></td>
                        <td>{c.vardas}</td>
                        <td>{c.komentaras}</td>                        
                    </tr>
                    ) : null}                                                         
                </tbody>
            </table>
        </div>
    )
}


