import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../styles/portal.css";
import app from "../App";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Card from "react-bootstrap/Card";

// import { Axios } from 'axios';
function Forum() {
  const [msg, setMsg] = useState("");

  // Axios({
  //   method: "POST",
  //   data: {
  //     user: app.data,
  //     message: msg
  //   },
  //   withCredentials: true,
  //   url: "http://localhost:4000/forum"
  // }).then((res) => {
  //   console.log(res)
  // })
  return (
    <div>
      <h1 align="center">
        Discussions
      </h1>
      <ListGroup></ListGroup>
      <div className="container justify-content-center">
        <Card>
          <Card.Header as="h5">Description</Card.Header>
          <Card.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="inputDescription" className="form-label">
                  Message
                </label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  id="inputDescription"
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <Button variant="outline-dark">Submit</Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Forum;
