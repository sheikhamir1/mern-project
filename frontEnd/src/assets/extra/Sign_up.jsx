import React from "react";
import "./Sign_up.css";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Sign_up() {
  return (
    <>
      <div className="sign_main signUp">
        <Form className="signFormSetup">
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="Name" placeholder="Enter First Name" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="Name" placeholder="Enter First Name" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Enter Your Email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Re-enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div className="signUpText">
            <Form.Text className="text-muted">
              if already have an account?{" "}
              <Link to="/" as={Link}>
                Sign In
              </Link>
            </Form.Text>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Sign_up;
