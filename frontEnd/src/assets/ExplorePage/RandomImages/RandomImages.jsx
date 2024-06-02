import React from "react";
import Random from "./Random";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

function RandomImages() {
  return (
    <>
      <div className="setUpBtnRandom">
        <Button as={Link} to="/explore" variant="primary">
          Back To Explore Page
        </Button>
        <div>
          <h2 style={{ textAlign: "center" }}>Awesome Images From Unsplash</h2>
        </div>
      </div>
      <Random />
      <Random />
      <Random />
      <Random />
      <Random />
      <Random />
      <Random />
      <Random />
      <Random />
      <Random />
    </>
  );
}

export default RandomImages;
