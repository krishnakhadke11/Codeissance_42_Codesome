import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function ReportIncident() {
  return (
    <div>
    <h1 align='center' style={{backgroundColor: '#f83a26', color:'#fbfbff'}}>Report Incident</h1>
    <div className="container">
      <form>
          <div className="mb-3">
            <label htmlFor="inputDescription" className="form-label">
              <h5>Description</h5>
            </label>
            <Form.Control as="textarea" rows={5} id="inputDescription"/>
          </div>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Please upload relevant photos.</Form.Label>
                <Form.Control type="file" multiple/>
            </Form.Group>
          <Button variant="outline-warning">Report Now</Button>
      </form>
      <hr/>
    </div>
    </div>
  )
}

export default ReportIncident