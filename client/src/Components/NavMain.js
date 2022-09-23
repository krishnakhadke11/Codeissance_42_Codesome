import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NavMain() {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" variant="light" justify="right">
        <Container>
          <Navbar.Brand href="#home">Urgence</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <Form>
              <Button
                variant="outline-danger"
                onClick={() => alert("Alerted emergency services.")}
              >
                Alert
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </div>
  );
}

export default NavMain;
