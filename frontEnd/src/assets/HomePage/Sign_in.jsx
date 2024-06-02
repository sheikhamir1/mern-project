import React, { useState, useContext } from "react";
import "./Sign_in.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import NoteContext from "../UseContext/notes/NoteContext";

function Sign_in() {
  const [show, setShowAlert] = useState(false);
  const [badShow, setBadShowAlert] = useState(false);
  const [alertError, setAlertError] = useState("");
  const [alertLogin, setAlertLogin] = useState("");
  let navigate = useNavigate();

  const { loginButton } = useContext(NoteContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log("Sign in", data);
    const respone = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const ComingResponse = await respone.json();
    // console.log(ComingResponse, "Sign in");
    if (ComingResponse.success) {
      const token = ComingResponse.JWTToken;
      // console.log("Token:", token);
      localStorage.setItem("token", token);
      // console.log("Token set in local storage:", localStorage.getItem("token"));
      const login = ComingResponse.msg;
      setAlertLogin(login);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate("/blogpage");
        loginButton();
      }, 3000);
    } else {
      const error = ComingResponse.errors[0].msg;
      setAlertError(error);
      setBadShowAlert(true);
      setTimeout(() => {
        setBadShowAlert(false);
      }, 5000);
    }
    reset();
  };

  return (
    <>
      {show && <Alert variant="success">{alertLogin}</Alert>}
      {badShow && <Alert variant="danger">{alertError}</Alert>}
      {/* Sign in form */}
      <div className="sign_main">
        <Form className="signFormSetup" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              {...register("email", {
                required: "email is required",
                minLength: {
                  value: 6,
                  message: "email must be at least 6 characters",
                },
              })}
            />
            {errors.email && (
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors.email.message}
              </span>
            )}
            <Form.Text className="text-muted">
              {" "}
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "password must be at least 8 characters",
                },
                maxLength: {
                  value: 25,
                  message: "password must be at most 25 characters",
                },
              })}
            />
            {errors.password && (
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors.password.message}
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Remember me"
              name="checkbox"
              {...register("checkbox", {
                required: "checkbox is required",
              })}
            />
            {errors.checkbox && (
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors.checkbox.message}
              </span>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
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

export default Sign_in;
