import React, { Component, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../styles/portal.css'
import app from '../App'
// import { Axios } from 'axios';
function Forum() {
  const [msg,setMsg] = useState("");
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
    <h1 align='center' style={{backgroundColor: '#b80c09', color:'#fbfbff'}}>Discussions</h1>
    <div className="container justify-content-center">
      <div className="OuterBox">
            <h3></h3>
            <div className='TextBox'>hello</div>
      </div>
      <form>
          <div className="mb-3">
            <label htmlFor="inputTitle" className="form-label">
              <h5>Title</h5>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Discuss emergencies!"
              id="inputTitle"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="inputDescription" className="form-label">
              <h5>Message</h5>
            </label>
            <Form.Control as="textarea" rows={5} id="inputDescription" onChange={(e)=>setMsg(e.target.value)}/>
          </div>
          <Button variant="outline-warning">Submit</Button>
      </form>
      <hr/>
    </div>
    </div>
  )
}

export default Forum
