import React, {useState} from 'react'
import Modal from 'react-modal';
import './LoginModal.css'

export default function LoginModal(props) {    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let userId=''
    function login() {
        console.log(email)
        console.log(password)

        fetch("http://localhost:8000/api/users",
            {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },                
            }
        ).then(res => res.json()).then(a => {
            for (let user of a) {
                if (user.email===email) {
                    userId=user.id
                    console.log(userId)
                    
                }
                
            }
        });
    }

    

    return (        
        <Modal set="50"  aria-labelledby="contained-modal-title-vcenter"
        centered isOpen={props.isOpen} onRequestClose={() => props.toClose(false)}
            style={
                {
                    content: {
                        // overflow: 'hidden',
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
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                        <small id="emailHelp" class="form-text text-muted">*We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input required type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <input type="submit" class="btn btn-primary btn-block btn-lg" value="Login" onClick={() => login()}/>
                </form>
        </Modal >
    )
}

