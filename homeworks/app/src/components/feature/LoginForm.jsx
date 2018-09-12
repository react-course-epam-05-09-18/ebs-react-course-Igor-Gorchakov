import React from "react";
import { Button, Alert, Col, Grid, Row, FormControl, ControlLabel } from "react-bootstrap";
import "../../styles/login.css"

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWarningDismiss = this.handleWarningDismiss.bind(this);
    this.state = {
      showWarning: false
    };
  }

  handleSubmit() {
    this.setState({ showWarning: true });
  }

  handleWarningDismiss() {
    this.setState({ showWarning: false });
  }

  render() {
    return (
      <div className="login">
        <Grid>
          <Row>
          {this.state.showWarning && 
            <Alert bsStyle="warning" onDismiss={this.handleWarningDismiss}>
              Password or email is incorrent. Check yourself before you wreck yourself :)
            </Alert>
          }
          </Row>
          <Row className="show-grid">
            <Col xsHidden md={4}/>
            <Col xs={6} md={4}>
              <ControlLabel>Login</ControlLabel>
              <FormControl type="text" placeholder="Login" />
            </Col>
            <Col xsHidden md={4}/>
          </Row>

          <Row className="show-grid">
            <Col xsHidden md={4}/>
            <Col xs={6} md={4}>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" placeholder="Password" />
            </Col>
            <Col xsHidden md={4}/>
          </Row>

          <Row>
            <Col smOffset={4} sm={1}>
              <Button type="submit" onClick={this.handleSubmit}>Sign in</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
  
export default LoginForm;