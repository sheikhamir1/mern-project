import React from "react";
import { Link } from "react-router-dom";
import "./Sign_in.css";
import HomePageTitle from "./HomePageTitle";

// bootstrap components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Home() {
  return (
    <>
      <HomePageTitle />

      {/* Sign in form */}
      <div className="sign_main">
        <Form className="signFormSetup">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <div className="signUpText">
            <Form.Text className="text-muted">
              Don't have an account?{" "}
              <Link to="/Signup" as={Link}>
                Sign Up
              </Link>
            </Form.Text>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Home;
