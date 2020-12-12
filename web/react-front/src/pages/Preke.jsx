import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Treneris.css'


export default function Preke(props) {

    const [preke, setPreke] = useState();

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
            console.log(preke);          
        });
    }, []);

    if (isLoggedIn()===false) {
        return 'unauthorised'
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
                                                <br/>
                                                <Link to={'/uzsakymas/'+pid}> 
                                                    <input type="submit" value="Užsakyti" />
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

