import React ,{useState} from "react";
import Button from "react-bootstrap/Button";
import Axios from "axios";

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: "http://localhost:4000/register"
    }).then((res) => {
      console.log(res)
    })
  };
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form>
        <div className="container">
          <div className="row">
            <div className="col">
              <label htmlFor="inputFirstName">First Name</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="John"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <label htmlFor="inputLastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Doe"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputRegEmail" className="form-label">
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
            <label htmlFor="inputRegPassword" className="form-label">
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
