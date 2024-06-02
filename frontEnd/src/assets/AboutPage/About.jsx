import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <>
      <Card style={{ backgroundColor: "#dee2e6" }}>
        <Card.Header as="h5">Welcome to About Page</Card.Header>
        <Card.Body>
          <Card.Text>
            Who Am I? My name is Amir sohail shiek, and I'm passionate about
            technology. I created this Application and it is still under
            development. in this application i add some feature and one of them
            is the notebook. I use this notebook as a way to organize and share
            my thoughts, notes, and articles on topics that I find fascinating.
            <p>## What Is This Notebook</p>
            About? This notebook is a personal space where I document my
            learning journey, share insights, and explore various subjects.
            Here, you'll find: -<p>**Articles**</p> Thought-provoking articles
            on topics ranging from technology to personal development. -
            <p>**Notes**:</p>
            Quick notes and summaries on books, courses, and experiences. -
            <p>**Blogs**</p>: In-depth blog posts that provide a detailed look
            into specific areas of interest.
            <p>## My Goals - **Knowledge Sharing**</p>: I believe in the power
            of sharing knowledge. Through this notebook, I aim to contribute to
            the community by providing valuable information and insights. -
            <p>**Continuous Learning**:</p> This platform helps me stay
            committed to continuous learning and improvement.
            <p>## Get In Touch If</p>
            you have any questions, feedback, or just want to say hello, feel
            free to contact me through the
            <p>**Contact**</p> page. I'd love to hear from you! Thank you for
            visiting my notebook. I hope you find the content here as exciting
            and informative as I do. Best regards, Amir sohail shiek
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default About;
