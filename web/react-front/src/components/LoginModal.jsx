import React, {useState} from 'react'
import Modal from 'react-modal';
import './LoginModal.css'

export default function LoginModal(props) {
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
                        <input required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">*We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input required type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <input type="submit" class="btn btn-primary btn-block btn-lg" value="Login"/>
                </form>
        </Modal >
    )
}
