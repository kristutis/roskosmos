import React, {useState, useEffect} from 'react'
import TrainerComments from '../components/TrainerComments'
import './Treneris.css'
import {FaStar} from 'react-icons/fa'


export default function Treneris(props) {
    const trenerioId = props.match.params.id

    const [komentarai, setKomentarai] = useState(null)
    const [trenerioInfo, setTrenerioInfo] = useState({})    

    const [rating, setrating] = useState(null)
    const [hover, setHover] = useState(null)

    const [naujasKomentaras, setNaujasKomentaras] = useState(null)

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
            if (a!==null) {
                setKomentarai(a)  
            } else {
                setKomentarai([])
            }                    
        });          
    }, [])

    if (rating) {
        console.log(rating)
        setrating(null)
    }

    function Komentuoti() {
        if (naujasKomentaras) {
            console.log(naujasKomentaras)
        } else {
            alert("Įrašykite komentarą!")
        }
    }    

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
                                <img className="rounded-circle img-thumbnail" height="auto" width="80%" alt=""  src={trenerioInfo.profilio_foto}/>
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
                                                <td><span className="badge badge-primary badge-pill">{trenerioInfo.vertinimas} / 5</span></td>
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
                        {komentarai ? <TrainerComments comms={komentarai}/> : null }                        
                                                    
                        <h4 className="text-white">Įvertinkite!</h4>
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i+1
                            // console.log(rating)
                            return (                                
                                <label>
                                    <input 
                                        type="radio"
                                        className="radio-iputas" 
                                        value={ratingValue} 
                                        onClick={() => setrating(ratingValue)}                                        
                                         />                                
                                    <FaStar 
                                        size={50} 
                                        className="star" 
                                        color={ratingValue<=(hover || rating) ? "#ffc107" : "#e4e5e9"}         
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)}                               
                                         />                         
                                </label> 
                            )
                        })}

                        <br></br><br></br>

                        <div className="input-group mb-2">                            
                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Parašykite atsiliepimą!" onChange={e => setNaujasKomentaras(e.target.value)}/>   
                            <div className="input-group-prepend">
                            <button type="button" className="btn btn-secondary" onClick={() => Komentuoti()} >Komentuoti</button>
                            </div>    
                        </div>
                        <br></br>                        
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

