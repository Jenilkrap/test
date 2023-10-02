import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <div className="subscribe">
    <div className="rectangle" />
    <div className="div" />
    <div className="group ">
        <div className="overlap-group">
            <img className="img" alt="Rectangle" src="/images/Amazing/image1.png" />
            <img className="rectangle-2" alt="Rectangle" src="/images/Amazing/image1.png" />
        </div>
    </div>
    <div className="content">
        <div className="title">
            <p className="subscribe-and-get">
                <span className="text-wrapper">Subscribe get our And Updates Every Week</span>
            </p>
            <p className="p">
                We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly
            </p>
        </div>
        <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
            <InputGroup className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>Enter your e-mail</Form.Label> */}
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
            </InputGroup>
            
            <Button className="CTA" variant="outline-secondary" id="button-addon2">
                <div className="text-wrapper-3">Subscribe</div>
            </Button>
            </div>
        </div>  
    </div>
</div>  

  )
}

export default Subscribe
    