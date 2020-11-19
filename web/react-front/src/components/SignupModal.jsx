import React, {useState} from 'react'
import Modal from 'react-modal';

export default function SignupModal(props) {
    const [vardas, setVardas] = useState('')
    const [pavarde, setPavarde] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPass, setRepeatPass] = useState('')

    function register() {
        if (repeatPass!=password) {
            alert("slaptažodžiai nesutampa!")
            return
        }
        if (vardas=='' || pavarde=='' || email=='' || password=='') {
            alert('neužpildyti visi laukai!')
            return
        }
        if (!(email.includes('@') && email.includes('.'))) {
            alert("You have entered an invalid email address!")
            return
        }

        const user = {
            vardas: vardas,
            pavarde: pavarde,
            email: email,
            slaptazodis: password,
        }
        console.log(JSON.stringify(user))
        fetch("http://localhost:8000/api/users",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },                
                body: JSON.stringify(user)
            }
        ).then(res => res.json()).then(a => {              
                if (a===true) {
                    alert('success')                
                } else {
                    alert('cannot register')
                }             
        });
    }

    return (
        <div>
            <Modal set="50"  aria-labelledby="contained-modal-title-vcenter"
                centered 
                isOpen={props.isOpen} 
                onRequestClose={() => props.toClose(false)}
                style={
                    {
                        content: {
                            top: '30%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            width: '30%',
                            height: '60%',
                            transform: 'translate(-40%, -10%)',
                            background: 'rgba(255,255,255, 0.7)',      
                        },
                        overlay: {
                            background: 'rgba(0,0,0, 0.8)',          
                        },
                    }                
                }>
                <div onClick={() => props.toClose(false)} className="close-x">+</div>
                <br></br>
                <form>
                    <p id="emailHelp" className="text-danger" id="alert-message"></p>
                    <div className="form-group">
                        <label for="vardas">Vardas</label>
                        <input required type="text" className="form-control"  onChange={e => setVardas(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="pavarde">Pavardė</label>
                        <input required type="email" className="form-control" onChange={e => setPavarde(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="epastas">El. pašto adresas</label>
                        <input required type="email" className="form-control" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="pass">Slaptažodis</label>
                        <input required type="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="pass">Pakartokite slaptažodį</label>
                        <input required type="password" className="form-control" onChange={e => setRepeatPass(e.target.value)}/>
                    </div>
                    <input className="btn btn-primary btn-block btn-lg" value="Registruotis" onClick={() => register()} />
                </form>
        </Modal >
        </div>
    )
}