import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <div className="container d-flex justify-content-left align-items-center my-5">
        <Row className='mb-3'>
        <Col>
        <Link to="/register" >
        <Button variant='outline-success'>Register</Button>
        </Link>
        </Col>
        <Col>
        <Link to="/login" >
        <Button variant="outline-primary">Log In</Button>
        </Link>
        </Col>
        </Row>
      </div>
    </div>
  )
}
 export default LandingPage;