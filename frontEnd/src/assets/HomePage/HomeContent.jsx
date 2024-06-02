import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function HomeContent() {
  return (
    <>
      <Card style={{ backgroundColor: "#dee2e6" }}>
        <Card.Header as="h5">Welcome to Charflix</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>
            Here you'll find a collection of my notes, thoughts, and ideas on
            various topics that interest me. Whether you're here to explore my
            latest articles, delve into interesting topics, or just curious
            about what I do, I'm glad to have you here. Feel free to navigate
            through different sections of the notebook using the menu. Each
            section is designed to offer you valuable insights and useful
            information.
          </Card.Text>
          <Button variant="primary" as={Link} to="/signup">
            go and register
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default HomeContent;
