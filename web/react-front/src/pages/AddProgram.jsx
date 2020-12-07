import React, {useEffect, useState} from 'react'
import './AddProgram.css'

export default function TrainerProfile() {


    const [pavadinimas, setPav] = useState('')
    const [trukme, setTrukme] = useState('')
    const [kaina, setKaina] = useState('')
    const [aprasymas, setApras] = useState('')

    const uid = getCookie('uid')   
    //const [program, setProgram] = useState({})
    var program = {
        id: 0,
        pavadinimas: 'nofin',
        trukme: 'nofin',
        aprasymas: 'nofin',
        kaina: 0,
        fk_trenerio_id: uid
    }

     

    function makeNew(){
        
        if (pavadinimas!=='') {
           program.pavadinimas = pavadinimas
        }

        if (trukme!==''){
            program.trukme = trukme
        }
        if (aprasymas!==''){
           program.aprasymas = aprasymas
        }
        if (kaina!==''){
            program.kaina= parseFloat(kaina)
        }
        
        const addingProgram = {
            pavadinimas: program.pavadinimas, 
            trukme: program.trukme,
            aprasymas: program.aprasymas,
            kaina: program.kaina, 
            treneris: uid
        }
        fetch(window.backend+"/programs/"+uid,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },                
                body: JSON.stringify(addingProgram)
            }
        ).then(res => res.json()).then(a => {              
                    alert('Pridėta sėkmingai!')
                      
        });
        console.log(JSON.stringify(addingProgram))

    }

    useEffect(() => {
        setIsLoggedIn(true)                 
    }, [])

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    if (!isLoggedIn) {
        return <h1>UNAUTHORISED</h1>
    }

    return (
        <div>
            <br></br><br></br>
            <div className="row base-div bordered-div">
                    <div className="col-md-12 second-profile-div">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Naujos programos kūrimas: </h1>
                                <br></br>
                                <h5>Pavadinimas</h5>
                                <input type="text" className="w-75 form-control" onChange={e => setPav(e.target.value)}/> 
                                <br></br>
                                <h5>Trukmė</h5>
                                <input type="text" className="w-75 form-control" onChange={e => setTrukme(e.target.value)}/> 
                                <br></br>
                                <h5>Kaina: </h5>
                                <input type="number" className="w-75 form-control" onChange={e => setKaina(e.target.value)}/>               
                                <br></br>
                                <h5>Aprašymas</h5>
                                <textarea rows="4" className="w-175 form-control" onChange={e => setApras(e.target.value)}/> 
                            </div>                                          
                        </div> 
                        <hr/>
                        <button type="button" className="btn btn-info" onClick={() => makeNew()}>Saugoti</button>
                    </div>
            </div>
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