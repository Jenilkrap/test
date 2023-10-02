import React from 'react'
import { Button, Card,Row,Col } from 'react-bootstrap'
import './Popular.css'
const Popular = () => {
  return (
    <div className="popular-artists">
      <div className="title">
        <p className="popular-artists-on">
            <span className="text-wrapper">Popular Artists On This Week</span>
            {/* <span className="span">
                Artists
                <br />
            </span>
            <span className="text-wrapper">On This Week</span> */}
        </p>
        <Button className="CTA" variant="outline-secondary" id="button-addon">
                <div className="text-wrapper-2">See All</div>
        </Button>
      </div>  
      <div className="imageacc">
      <Row>
        <Col>
          <Card >
          <Card.Img variant="top" src="/images/Popular/image04.png" />
          <div className="card-footer">
            <button className="button-content" id="button-addon1">
              <div className="button-subheading">Owner</div>
              <div className="button-heading">OwnerName</div>
            </button>
          </div>
            {/* <button className="card-footer" >Last updated 3 mins ago</button> */}
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="/images/Popular/image03.png" />
            <div className="card-footer">
            <button className="button-content" id="button-addon2">
              <div className="button-subheading">Owner</div>
              <div className="button-heading">OwnerName</div>
            </button>
          </div>
          </Card>
        </Col>
        <Col>
          <Card bg="primary" text="white" p="3">
          <Card.Img variant="top" src="/images/Popular/image02.png" />
          <div className="card-footer">
            <button className="button-content" id="button-addon3">
              <div className="button-subheading">Owner</div>
              <div className="button-heading">OwnerName</div>
            </button>
          </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
          <Card.Img variant="top" src="/images/Popular/image01.png" />
          <div className="card-footer">
            <button className="button-content" id="button-addon4">
              <div className="button-subheading">Owner</div>
              <div className="button-heading">OwnerName</div>
            </button>
          </div>          </Card>
        </Col>
        <Col>
          <Card p="3" text="right">
          <Card.Img variant="top" src="/images/Popular/image05.png" />
          <div className="card-footer">
            <button className="button-content" id="button-addon5">
              <div className="button-subheading">Owner</div>
              <div className="button-heading">OwnerName</div>
            </button>
          </div>
          </Card>
        </Col>
        {/* <Col>
          <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />

          </Card>
        </Col> */}
      </Row>
    </div>

    </div>
)
}

export default Popular
