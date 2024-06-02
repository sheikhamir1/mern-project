import React, { useState, useContext } from "react";
import NoteContext from "../UseContext/notes/NoteContext";
import "./Sign_up.css";
import { Link, useNavigate } from "react-router-dom";

import { Button, Form, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Sign_up() {
  const [show, setShowAlert] = useState(false);
  const [badShow, setBadShowAlert] = useState(false);
  const [alertError, setAlertError] = useState("");
  const [alertRegister, setAlertRegister] = useState("");

  const { loginButton } = useContext(NoteContext);

  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log("Sign up", data);
    const respone = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
    });
    const ComingResponse = await respone.json();
    // console.log(ComingResponse, "register");
    if (ComingResponse.success === true) {
      const token = ComingResponse.JWTToken;
      // console.log("Token:", token);
      localStorage.setItem("token", token);
      // console.log("Token set in local storage:", localStorage.getItem("token"));
      const register = ComingResponse.msg;
      setAlertRegister(register);
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
      {show && <Alert variant="success">{alertRegister}</Alert>}
      {badShow && <Alert variant="danger">{alertError}</Alert>}
      <div className="sign_main signUp">
        <Form className="signFormSetup" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="Name"
              placeholder="Enter First Name"
              name="firstName"
              {...register("firstName", {
                required: "firstName is required",
                minLength: {
                  value: 2,
                  message: "firstName must be at least 2 characters",
                  maxLength: {
                    value: 10,
                    message: "firstName must be less than 10 characters",
                  },
                },
              })}
            />
            {errors.firstName && (
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors.firstName.message}
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="Name"
              placeholder="Enter First Name"
              name="lastName"
              {...register("lastName", {
                required: "lastName is required",
                minLength: {
                  value: 2,
                  message: "lastName must be at least 2 characters",
                  maxLength: {
                    value: 10,
                    message: "lastName must be less than 10 characters",
                  },
                },
              })}
            />
            {errors.lastName && (
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors.lastName.message}
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Enter Your Email"
              name="email"
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
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
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
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Re-enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter Password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: "confirmPassword is required",
                minLength: {
                  value: 8,
                  message: "confirmPassword must be at least 8 characters",
                },
                maxLength: {
                  value: 25,
                  message: "confirmPassword must be at most 25 characters",
                },
              })}
            />
            {errors.confirmPassword && (
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors.confirmPassword.message}
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
            Register
          </Button>
          <div className="signUpText">
            <Form.Text className="text-muted">
              if already have an account?{" "}
              <Link to="/signin" as={Link}>
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
