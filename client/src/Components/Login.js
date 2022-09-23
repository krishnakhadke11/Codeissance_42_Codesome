import React, { useState } from "react";
import loginCss from "../styles/login.css";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Card from "react-bootstrap/Card";

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState("");

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
      setData(res.data);
      console.log(res);
    });
  };
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/getUser",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div className="container d-flex justify-content-center py-5">
      <Card className="col-6">
        <Card.Header as="h5">Log In</Card.Header>
        <Card.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="email@example.com"
                id="inputEmail"
                onChange={(e) => setLoginUsername(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="inputDescription" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setLoginPassword(e.target.value)}
              ></input>
            </div>
            <Button variant="outline-dark" onClick={login}>
              Log In
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
