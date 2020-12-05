import React, {useEffect, useState} from 'react'
import './SalesRezervacija.css'

export default function SalesRezervacija() {      
    const [laikai, setLaikai] = useState(null)
    const uid = getCookie('uid')    

    useEffect(() => {
        fetch(window.backend+"/reservations/"+uid,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },                
                })
        .then(res => res.json())
        .then(a => {
            setLaikai(a)       
        });                     
    }, [])

    if (uid==='') {
        return <h1>UNAUTHORISED</h1>
    }

    return (
        <div className="isorinis-divas">
            <br></br><br></br><br></br>

            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Data</th>
                        <th scope="col">Laikas</th>
                        <th scope="col">Liko vietų</th>
                        <th scope="col">Pasirinkti</th>
                    </tr>
                </thead>
                <tbody>
                    {laikai ? laikai.map((l, index)  => 
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{l.kuri_diena}</td>
                        <td>{l.laikas_nuo+ " - " +l.laikas_iki}</td>
                        <td>{l.zmoniu_skaicius}</td>
                        <td>
                            {l.rezervuota_kliento==true}
                            {getButton(l.id, l.zmoniu_skaicius, l.rezervuota_kliento, l.kuri_diena, l.laikas_nuo+ " - " +l.laikas_iki)}    
                        </td>
                    </tr>
                    ) : null}
                </tbody>
            </table>
        </div>
    )
    
}

function RezervuotiLaika(id, data, laikas) {    
    const uid = getCookie('uid')    
    let rezervacija = {
        fk_rezervacijos_id: id,
        fk_vartotojo_id: uid,
    }
    // console.log(rezervacija)
    fetch(window.backend+"/reservations",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },                
                body: JSON.stringify(rezervacija)             
            })
    .then(res => res.json())
    .then(a => {
        console.log(a)     
    });          
    alert("rezervuota")
    IssiustiEmail(uid, data, laikas)    
}

function IssiustiEmail(uid, data, laikas) {
    let emailas=""
    fetch(window.backend+"/users/"+uid,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },                          
            })
    .then(res => res.json())
    .then(a => {
        emailas=a.email
        let emailoInfo = {
            email: emailas,
            pavadinimas: "Nauja rezervacija",
            zinute: "Sveiki, Jūs užsirezervavote laiką: "+data+", " +laikas+". Lauksime atvykstant!"
        }
        console.log(emailoInfo)    
    
        fetch("http://localhost/php_emailo_rest_api/api.php",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },                          
                    body: JSON.stringify(emailoInfo)  
                })
        .then(res => res.json())
        .then(a => {
            console.log(a)  
        });       
        // console.info(emailas)


    });       
    // console.log(emailas)
}

function getButton(id, zmoniuSk, rezeruotaKliento, data, laikas) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-'+ mm + '-'+ dd ;    

    var parts1 =data.split('-');
    var parts2 =today.split('-');
    var mydate1 = new Date(parts1[0], parts1[1] - 1, parts1[2]); 
    var mydate2 = new Date(parts2[0], parts2[1] - 1, parts2[2]); 

    if (mydate1<mydate2) {
        return <button type="button" class="btn btn-secondary btn-lg btn-block" disabled>Praėjusi data</button>
    }

    if (zmoniuSk===0) {
        return <button type="button" class="btn btn-secondary btn-lg btn-block" disabled>Nėra laisvų vietų</button>
    }

    if (rezeruotaKliento==true) {
        return <button type="button" class="btn btn-secondary btn-lg btn-block" disabled>Pasirinkta</button>
    }

    return <button type="button" class="btn btn-secondary btn-lg btn-block" id={id} onClick={() => RezervuotiLaika(id, data, laikas)}>Rinktis</button>
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
