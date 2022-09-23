import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function ReportIncident() {
  return (
    <div>
      <h1 align="center">Alert Submissions</h1>
      <div className="container">
        <Card>
          <Card.Header as="h5">Report</Card.Header>
          <Card.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="inputDescription" className="form-label">
                  Description
                </label>
                <Form.Control as="textarea" rows={5} id="inputDescription" />
              </div>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Please upload relevant photos.</Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group>
              <Button variant="outline-dark">Submit</Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ReportIncident;
