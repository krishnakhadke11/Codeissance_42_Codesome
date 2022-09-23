import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function LandingPage() {
  return (
    <div>
      <div className="container my-5 col-md">
        <Card>
          <Card.Body>
            <img src="https://images.unsplash.com/photo-1663948840606-b5d6618b9857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1262&q=80"></img>
          </Card.Body>
        </Card>
      </div>
      <div className="container d-flex justify-content-left align-items-center my-5">
        <Card>
          <Card.Body>
            <Row className="g-3">
              <Col>
                <Link to="/register">
                  <Button variant="outline-success">Register</Button>
                </Link>
              </Col>
              <Col>
                <Link to="/login">
                  <Button variant="outline-primary">Log In</Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default LandingPage;
