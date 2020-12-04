import React, {useState, useEffect} from 'react'
import TrainerComments from '../components/TrainerComments'
import './Treneris.css'
import defaultPic from '../images/profile-picture.png'


export default function Treneris(props) {
    const trenerioId = props.match.params.id

    const [komentarai, setKomentarai] = useState([])
    const [trenerioInfo, setTrenerioInfo] = useState({})    

    useEffect(() => {
        fetch(window.backend+"/trainers/"+trenerioId,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },                
                })
        .then(res => res.json())
        .then(a => {
            let ti = {
                aprasymas:a.aprasymas,
                kaina:a.kaina,
                moto:a.moto,
                vardas:a.user.vardas,
                pavarde:a.user.pavarde,
                profilio_foto:a.user.profilio_foto,
                vertinimas:a.vertinimas,
            }
            setTrenerioInfo(ti)            
        });       

        fetch(window.backend+"/comments/"+trenerioId,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },                
                })
        .then(res => res.json())
        .then(a => {    
            if (a!=null) {
                const comms = SudetiKomentuotojus(a)
                setKomentarai(comms)  
            } else {
                setKomentarai(null)
            }                    
        });          
    }, [])

    // console.log(trenerioInfo)
    // console.log(komentarai)

    if (isLoggedIn()===false) {
        return 'unauthorised'
    }

    return (
        <div className="first-div">
            <br></br><h1 className="text-white">{trenerioInfo.vardas + " " + trenerioInfo.pavarde}</h1><br></br>
            <div className="ts container-fluid d-flex justify content-center">
                <div className="row">
                    <div className="col-md-6">       
                        <div className="row">    
                            <div className="col-md-12">                    
                                <img className="img-rounded" height="auto" width="70%" alt=""  src={trenerioInfo.profilio_foto}/>
                                <br></br><br></br>
                                <h4 className="text-white">{"“"+trenerioInfo.moto+"”"}</h4>
                                <br></br><br></br>                                                               
                            </div>
                            <div className="col-md-12">     
                                <div className="trenerio-info-table">              
                                    <table className="table table-secondary" >
                                        <tbody>
                                            <tr>
                                                <th scope="row">Aprašymas:</th>
                                                <th scope="col">{trenerioInfo.aprasymas}</th>
                                            </tr>
                                            <tr>
                                                <th scope="row">Vertinimas:</th>
                                                <td><span className="badge badge-primary badge-pill">{trenerioInfo.vertinimas}</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Kaina:</th>
                                                <td><span className="badge badge-primary badge-pill">{trenerioInfo.kaina+"€"}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">        
                        <TrainerComments comms={komentarai}/>
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

function SudetiKomentuotojus(comms) {
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
            // console.log(updatedComms)                          
    });    

    return updatedComms
}