import React from "react";
import Button from "react-bootstrap/Button";

function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form>
        <div className="container">
          <div className="row">
            <div className="col">
              <label for="inputFirstName">First Name</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="John"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <label for="inputLastName">Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Doe"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="inputRegEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="email@example.com"
              id="inputRegEmail"
            ></input>
          </div>
          <div className="mb-3">
            <label for="inputRegPassword" class="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputRegPassword"
            ></input>
          </div>
          <Button variant="outline-dark">Register</Button>
        </div>
      </form>
    </div>
  );
}

export default Register;