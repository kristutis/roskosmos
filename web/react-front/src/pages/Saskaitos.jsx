import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './SalesRezervacija.css'

export default function Saskaitos() {      
    const [receipts, setReceipts] = useState(null)
    const uid = getCookie('uid')    

    useEffect(() => {
        fetch(window.backend+"/receipts/"+uid,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },                
                })
        .then(res => res.json())
        .then(a => {
            console.log('HMMMMMM');
            console.log(a,'<<<<<<<<<<,,');
            setReceipts(a);     
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
                        <th scope="col">Kaina be pvm</th>
                        <th scope="col">Kaina su pvm</th>
                        <th scope="col">Prekes pavadinimas</th>
                        <th scope="col">Adresas</th>
                    </tr>
                </thead>
                <tbody>
                    {receipts ? receipts.map((l, index)  => 
                    <tr>
                        <td>{index+1}</td>
                        <td>{l.kaina_be_pvm.toFixed(2)}$</td>
                        <td>{l.kaina_su_pvm.toFixed(2)}$</td>
                        <td>{l.pavadinimas}</td>
                        <td>{l.adresas}</td>
                    </tr>
                    ) : null}
                </tbody>
            </table>
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
