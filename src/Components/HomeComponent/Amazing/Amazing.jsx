import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import './Amazing.css'
const Amazing = () => {
  return (
    <div>
    <div className="head">
      <p className="amazing-and-super">
        <span className="text-wrapper">Amazing</span>
        <span className="span">
          {" "}
          and Super <br />
          Unique Art of This{" "}
        </span>
        <span className="text-wrapper">Week</span>
      </p>
      <button className="CTA">
        <div className="div">See All</div>
      </button>
    </div>
    <div className="cards">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="h-100 card-container">
              <Card.Img variant="top" src="/images/Amazing/image1.png" />
              <Card.Body>
                <Card.Title>Cyberpunk Cocomo    eth34</Card.Title>
                <Card.Text>
                Ending in
  
                <button className="CTA">
                  <div className="text-wrapper-4">Place A Bid</div>
                </button>
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
          <Col>
            <Card className="h-100 card-container">
              <Card.Img variant="top" src="/images/Amazing/image2.png" />
              <Card.Body>
                <Card.Title>Charge, Qi tiao yu</Card.Title>
                <Card.Text>
                Ending in
  
                <button className="CTA">
                  <div className="text-wrapper-4">Place A Bid</div>
                </button>
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
          <Col>
            <Card className="h-100 card-container">
              <Card.Img variant="top" src="/images/Amazing/image3.png" />
              <Card.Body>
                <Card.Title>Surgeon, Josh Rife</Card.Title>
                <Card.Text>
                Ending in
  
                <button className="CTA">
                  <div className="text-wrapper-4">Place A Bid</div>
                </button>
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
        </Row>
    </div>
    </div>
  )
}

export default Amazing