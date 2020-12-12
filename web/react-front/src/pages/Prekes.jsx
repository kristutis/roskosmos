import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './SalesRezervacija.css'

export default function Prekes() {      
    const [goods, setGoods] = useState(null)
    const [pulledGoods, setPulledGoods] = useState();
    const [query, setQuery] = useState('');
    const uid = getCookie('uid')    

    useEffect(() => {
        fetch(window.backend+"/goods",
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
            setPulledGoods(a);
            setGoods(a);     
        });                     
    }, [])

    if (uid==='') {
        return <h1>UNAUTHORISED</h1>
    }

    const handleClick = () => {
        let foundGoods = [];
        pulledGoods.forEach(element => {
            let n = element.pavadinimas.toLowerCase().search(query.toLowerCase());
            if(n !== -1) {
                foundGoods.push(element);
            }
        });
        if(query !== undefined || query !== '' || query !== null || !query.isNan()) {
            console.log('querY')
            console.log(query);
            setGoods(foundGoods);
        }
        else if(query === '' || query === undefined || query.isNan() || query === null) {
            console.log('noQuery');
            setGoods(pulledGoods);
        }
        console.log(goods);
    };

    return (
        <div className="isorinis-divas">
            <br></br><br></br><br></br>
            <div class="topnav">
            <h2>Paieška</h2>
                <input type="text" placeholder="Search.."  value={query} onChange={(e) =>{
                setQuery(e.target.value);
                }}/>
                <button type="button" className="btn btn-primary"onClick={handleClick}>Search</button>
            </div>

            <table class="table table-dark">
                <thead> 
                    <tr>
                        <th scope="col">Nuotrauka</th>
                        <th scope="col">Pavadinimas</th>
                        <th scope="col">Aprasymas</th>
                        <th scope="col">Kaina</th>
                        <th scope="col">Sandelio Nr.</th>
                    </tr>
                </thead>
                <tbody>
                    {goods ? goods.map((l, index)  => 
                    <tr>
                        <td><img src={l.foto} border={3} height={100} width={100} alt=""/></td>
                        <td>{l.pavadinimas}</td>
                        <td>{l.aprasymas}</td>
                        <td>{l.kaina}</td>
                        <td>{l.fk_sandelio_id}</td>                
                        <td>
                            <Link to={'/preke/'+l.id}> 
                                <input type="submit" value="Plačiau" />
                            </Link>
                        </td>
                        <td>
                            <Link to={'/uzsakymas/'+l.id}> 
                                <input type="submit" value="Užsakyti" />
                            </Link>
                        </td>
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
