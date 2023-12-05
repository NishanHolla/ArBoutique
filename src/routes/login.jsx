import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import main from '../images/mainlogo.png';

function LoginForm() {
  return (
    <Container fluid style={{ backgroundColor: "pink" }}>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={4}>
          <div className="card p-4">
            <div className="text-center mb-4">
              <img src={main} alt="Logo" width="150" />
            </div>
            <Form action="/" method="get">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Login
              </Button>

              <Button variant="secondary" type="submit" className="w-100">
                Sign in
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
