import React from "react";
import loginCss from "../styles/login.css";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form>
          <div className="mb-3">
            <label for="inputEmail" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="email@example.com"
              id="inputEmail"
            ></input>
          </div>
          <div className="mb-3">
            <label for="inputPassword" class="form-label">
              Password
            </label>
            <input type="password" className="form-control"></input>
          </div>
          <Button variant="outline-dark">Log In</Button>
      </form>
    </div>
  );
}

export default Login;
