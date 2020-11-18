import React, {useState} from 'react'
import Modal from 'react-modal';

export default function LoginModal(props) {
    return (        
        <Modal set="50"  aria-labelledby="contained-modal-title-vcenter"
        centered isOpen={props.isOpen} onRequestClose={() => props.toClose(false)}
            style={
                {
                    overlay: {
                        backgroundColor: 'grey',
                    },
                    size: {
                        
                    }
                }                
            }>
            {/* <Modal.Header className="login-header">
                <Modal.Title className="text-bold text-uppercase">Prisijungimas</Modal.Title>
                <i className="close-button fas fa-times" alt="foto"/>
            </Modal.Header> */}
            <form>

                    <label>El. Paštas</label>
                    <input type="email" className="border-zero submit-text" placeholder=""  />


                    <label>Slaptažodis</label>
                    <input type="password" className="border-zero submit-text text-bold" placeholder="" />

                {/* <Row>
                    <Col sm="8" className="pt-3"> */}
                        <a href="#"  ><p className="mb-0">Pamiršote slaptažodį?</p></a>
                    {/* </Col> */}
                    {/* <Col sm="4"> */}
                        <button className="float-right btn-loginsubmit text-bold text-uppercase" variant="link" type="button" >Prisijungti</button>
                    {/* </Col> */}
                {/* </Row> */}
            </form> 
            <h1>hello</h1>
            <p>ppl</p>
            <button onClick={() => props.toClose(false)}></button>
        </Modal >
    )
}
