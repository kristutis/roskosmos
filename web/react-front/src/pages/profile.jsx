import React, {useEffect, useState} from 'react'
import './Profile.css'
import defaultProfilePic from '../images/profile-picture.png'

export default function Profile() {
    const [vardas, setVardas] = useState('')
    const [pavarde, setPavarde] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPass, setRepeatPass] = useState('')
    const [foto, setFoto] = useState('')

    function applyChanges() {
        if (vardas!=='') {
            user.vardas=vardas
        }
        if (pavarde!=='') {
            user.pavarde=pavarde
        }
        if (email!=='') {
            if (!(email.includes('@') && email.includes('.'))) {
                alert("Blogai įvestas el. paštas!")
                return
            }
            user.email=email
        }
        if (password!=='') {
            if (password!==repeatPass) {
                alert("Slaptažodžiai nesutampa!")
                return
            }
            user.slaptazodis = password             
        }
        if (foto!=='') {
            user.profilio_foto=foto
        }

        const updatedUser = {
            id: user.id,
            vardas: user.vardas,
            pavarde: user.pavarde,
            email: user.email,
            slaptazodis: user.slaptazodis,
            profilio_foto: user.profilio_foto,
            role: user.role
        }

        fetch(window.backend+"/users/"+user.id,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },                
                body: JSON.stringify(updatedUser)
            }
        ).then(res => res.json()).then(a => {              
                if (a===true) {
                    alert('Pakeitimai užsaugoti!')
                } else {
                    alert('Nepavyko užsaugoti')
                }             
        });

        console.log(JSON.stringify(updatedUser))
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        const uid = getCookie('uid')
        if (uid!=='') {
            setIsLoggedIn(true)        
            fetch(window.backend+"/users/"+uid,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },                
                    }
            ).then(res => res.json()).then(a => {
                if (a.profilio_foto==='DEFAULT') {
                    a.profilio_foto=defaultProfilePic
                }
                var data = a.modify_date.slice(0,10)
                var laikas = a.modify_date.slice(11,16)
                a.modify_date = data + " " + laikas
                data = a.reg_date.slice(0,10)
                laikas = a.reg_date.slice(11,16)
                a.reg_date= data + " " + laikas
                setUser(a)
            });           
        }        
    }, [])

    if (!isLoggedIn) {
        return <h1>UNAUTHORISED</h1>
    }

    return (
        <div>
            <br></br><br></br>
            <div className="row base-div bordered-div">
                    <div className="col-md-4 first-profile-div">
                        <br></br><br></br><br></br>
                        <img className="rounded-circle prof-img" src={user.profilio_foto} alt=""/>
                        <br></br><br></br>
                        <h1 className="text-center text-white">{user.role}</h1>
                        <br></br><br></br>
                        <div className="row">                        
                            <input type="text" className="w-50 form-control input-center" defaultValue={user.vardas} onChange={e => setVardas(e.target.value)}/>                       
                            <input type="text" className="w-50 form-control input-center" defaultValue={user.pavarde} onChange={e => setPavarde(e.target.value)}/>                          
                        </div>
                        <br></br><br></br>
                        <div className="row justify-content-center">    
                            <h4 className="text-center text-white mr-1">Nauja nuotrauka</h4>
                            <input type="text" className="w-25 form-control"  onChange={e => setFoto(e.target.value)}/>  
                            <br></br><br></br>
                        </div>
                    </div>
                    <div className="col-md-8 second-profile-div">
                        <div className="row">
                            <div className="col-md-6">
                                <br></br>
                                <h5>El. pašto adresas</h5>
                                <input type="text" className="w-75 form-control" defaultValue={user.email} onChange={e => setEmail(e.target.value)}/> 
                            </div>   
                            <div className="col-md-6">
                                <br></br>
                                <h5>Keisti slaptažodį</h5>
                                <input type="password" className="w-75 form-control" onChange={e => setPassword(e.target.value)}/> 
                                <br></br>
                                <h5>Pakartokite slaptažodį</h5>
                                <input type="password" className="w-75 form-control" onChange={e => setRepeatPass(e.target.value)}/> 
                            </div>                                             
                        </div> 
                        <br></br><br></br><br></br><br></br>
                        <hr/>
                        <div className="row">
                            <div className="col-md-6">
                                <br></br>
                                <h5>Profilis sukurtas:</h5>
                                <p>{user.reg_date}</p>
                            </div>   
                            <div className="col-md-6">
                                <br></br>
                                <h5>Paskutinį kartą keista:</h5>
                                <p>{user.modify_date}</p>
                            </div>                                                          
                        </div> 
                        <br></br><br></br>
                        <button type="button" className="btn btn-outline-secondary keisti-mygtukas" onClick={() => applyChanges()}>Patvirtinti pakeitimus</button>
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