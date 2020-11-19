import React, {useState} from 'react'
import Modal from 'react-modal';
import './LoginModal.css'

export default function LoginModal(props) {    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let userId=''
    function login() {
        fetch("http://localhost:8000/api/users",
            {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },                
            }
        ).then(res => res.json()).then(a => {
            var found=false
            for (let user of a) {                
                if (user.email===email && user.slaptazodis===password) {
                    // console.log(a)
                    userId=user.id
                    console.log(userId)    
                    document.cookie = "uid="+userId;   
                    found=true        
                    window.location.reload(false);                         
                }              
            }
            if (!found) {
                document.getElementById("alert-message").innerHTML = "Neteisingas el. paštas arba slaptažodis!";
            }
        });
        
    }

    

    return (        
        <Modal set="50"  aria-labelledby="contained-modal-title-vcenter"
        centered isOpen={props.isOpen} onRequestClose={() => props.toClose(false)}
            style={
                {
                    content: {
                        top: '30%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        width: '30%',
                        height: '40%',
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
                <br></br>
                <form>
                    <p id="emailHelp" className="text-danger" id="alert-message"></p>
                    <div className="form-group">
                        <label for="exampleInputEmail1">El. pašto adresas</label>
                        <input required type="email" className="form-control" aria-describedby="emailHelp" placeholder="Įrašykite prisijungimo duomenis" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input required type="password" className="form-control" placeholder="Įrašykite prisijungimo duomenis" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <input className="btn btn-primary btn-block btn-lg" value="Prisijungti" onClick={() => login()}/>
                </form>
        </Modal >
    )
}

