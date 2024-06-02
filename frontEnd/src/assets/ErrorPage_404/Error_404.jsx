import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./404.css"; // Custom CSS for additional styling

const Error_404 = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Row>
        <Col className="text-center">
          <h1 className="display-1 text-danger ErrorHeading">404</h1>
          <h2 className="mb-4 ErrorText">Oops! Page Not Found</h2>
          <p className="lead mb-4 ErrorText">
            Sorry, the page you're looking for doesn't exist. It might have been
            removed, or you may have mistyped the URL.
          </p>
          <Button as={Link} to="/" variant="primary" size="lg">
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Error_404;
