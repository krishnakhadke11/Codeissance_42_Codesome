import React, { Component } from 'react'

export class Forum extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         arrDisc : ['']
      }
    }
    
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default Forum;