import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Treneris.css'


export default function Uzsakymas(props) {

    const [preke, setPreke] = useState();
    const [adresas, setAdresas] = useState("Skundikų gatvė");
    const [apmokejimas, setApmokejimas] = useState("Grynais atvykus");

    const pid = props.match.params.id;

    useEffect(() => {
        console.log(pid);
        fetch(window.backend+"/goods/"+pid,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },                
                })
        .then(res => res.json())
        .then(a => {
            console.log(a,'ZDES');
            setPreke(a[0])
        });
    }, []);

    if (isLoggedIn()===false) {
        return 'unauthorised'
    }

    const buy = () =>{
        const uid = getCookie('uid')
        console.log(pid,"CIA PREKES ID");
        const order = {
            kaina: preke.kaina,
            prekes_id: pid,
            vartotojo_id: uid,
            atsiskaitymo_budas: apmokejimas,
            adresas: adresas,
            fk_sandelio_id: preke.fk_sandelio_id
        };
        fetch(window.backend+"/order",
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },                
                body: JSON.stringify(order)             
            })
    .then(res => res.json())
    .then(a => {
        if(preke.kiekis_sandelyje-1 <= 3) IssiustiEmail();
        console.log(a)
    });         
    };

    const IssiustiEmail = () => {
        const uid = getCookie('uid')
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
                email: "isp.roskosmos@gmail.com",
                pavadinimas: "Prekės kiekis sandelyje mažėja!",
                zinute: "Prekės "+preke.pavadinimas+" kiekis sandelyje mažėja! Liko "+(preke.kiekis_sandelyje-1).toString()+" vnt"
            }        
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
        });       
    }

    return (
        <div className="first-div">
            <br></br><h1 className="text-white"></h1><br></br>
            <div>
                <div className="row">
                    <div className="col-md-4">       
                        <div className="row">    
                            <div className="col-md-12">                    
                                <img src={preke && preke.foto} border={3} height={600} width={600} alt=""/>
                                <br></br><br></br>
                                <h4 className="text-white"></h4>
                                <br></br><br></br>                                                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">                            
                        <br></br><br></br>

                        <div className="input-group mb-3">
                        <table className="table table-secondary" >
                                        <tbody>
                                        <tr>
                                                <th scope="row">Pavadinimas:</th>
                                                <th scope="col">{preke && preke.pavadinimas}</th>
                                            </tr>
                                            <tr>
                                                <th scope="row">Aprašymas:</th>
                                                <th scope="col">{preke && preke.aprasymas}</th>
                                            </tr>
                                            <tr>
                                                <th scope="row">Kaina:</th>
                                                <th scope="col">{preke && preke.kaina}$
                                                </th>
                                            </tr>
                                        </tbody>
                        </table>
                        </div>
                        <div>
                        <table className="table table-secondary" >
                                        <tbody>
                                            <th colSpan="2">Užsakymo informacija</th>
                                        <tr>
                                                <th scope="row">Atsiėmimo vieta</th>
                                                <th scope="col">
                                                <select id="adresai" name="adresai" value={adresas} onChange={(e)=>setAdresas(e.target.value)}>
					                                <option value="Skundikų gatvė">Skundikų gatvė</option>
					                                <option value="Melžėjų skveras">Melžėjų skveras</option>
					                                <option value="Grybų alėja">Grybų alėja</option>
					                                <option value="Molių prospektas">Molių prospektas</option>
				                                </select>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">Apmokėjimo būdas</th>
                                                <th scope="col">
                                                <select id="mokejimai" name="mokejimai" value={apmokejimas} onChange={(e)=>setApmokejimas(e.target.value)}>
					                                <option value="Grynais atvykus">Grynais atvykus</option>
					                                <option value="Kortele atvykus">Kortele atvykus</option>
				                                </select>
                                                <Link to={'/sekmingas'}> 
                                                <button type="button" class="btn btn-primary" value="Uzsakyti" onClick={() => buy()} >Tvirtinti užsakymą</button>
                                                </Link>
                                                </th>
                                            </tr>
                                        </tbody>
                        </table>
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

