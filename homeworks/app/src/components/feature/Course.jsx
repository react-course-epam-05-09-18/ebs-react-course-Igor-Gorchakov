import React from "react";
import {Form, FormGroup, Col, FormControl, ControlLabel, Button} from "react-bootstrap";

class Course extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Form horizontal>
            <FormGroup controlId="caption">
                <Col componentClass={ControlLabel} sm={2}>
                    Caption
                </Col>
                <Col sm={4}>
                    <FormControl type="text" placeholder="Caption" />
                </Col>
            </FormGroup>

             <FormGroup controlId="description">
                <Col componentClass={ControlLabel} sm={2}>
                    Description
                </Col>
                <Col sm={4}>
                    <FormControl componentClass="textarea" placeholder="Description" />
                </Col>
            </FormGroup>

            <FormGroup controlId="date">
                <Col componentClass={ControlLabel} sm={2}>
                Date
                </Col>
                <Col sm={4}>
                    <FormControl type="text" placeholder="Date in dd.mm.yyyy format" />
                </Col>
            </FormGroup>

            <FormGroup controlId="duration">
                <Col componentClass={ControlLabel} sm={2}>
                Duration
                </Col>
                <Col sm={4}>
                    <FormControl type="text" placeholder="Duration in hh.mm format" />
                </Col>
            </FormGroup>

            <FormGroup controlId="buttons">
                <Col sm={2}></Col>
                <Col sm={4}>
                    <Button>Save</Button>
                    <Button>Cancel</Button>
                </Col>
            </FormGroup>
            

        </Form>
    );
  }
}
  
export default Course;