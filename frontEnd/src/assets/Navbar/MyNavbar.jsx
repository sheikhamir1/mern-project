import React, { useEffect, useState, useContext } from "react";
import NoteContext from "../UseContext/notes/NoteContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

// bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  const { isLoggedIn, logout } = useContext(NoteContext);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <Link className="nav-link" as={Link} to="/">
              ChatFlix
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="nav-link" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/about">
                About
              </Nav.Link>

              <Nav.Link className="nav-link" as={Link} to="/explore">
                Explore
              </Nav.Link>

              <Nav.Link className="nav-link" as={Link} to="/LatestNews">
                Latest New
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/blogpage">
                Notebook
              </Nav.Link>
              {/* <Nav.Link className="nav-link" as={Link} to="/ErrorPage">
                Test 404 Page
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              {isLoggedIn ? (
                <Button
                  variant="primary"
                  as={Link}
                  to="/"
                  onClick={logout} // Add onClick event handler
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    variant="primary"
                    style={{ marginRight: "10px" }}
                    as={Link}
                    to="/signin"
                    // onClick={login}
                  >
                    login
                  </Button>
                  <Button variant="primary" as={Link} to="/signup">
                    Sign Up
                  </Button>
                </>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
