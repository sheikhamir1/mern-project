import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Explore.css";

// bootstrap components
import Button from "react-bootstrap/Button";

function Explore() {
  return (
    <>
      <div className="setUpBtnExplore">
        <Button className="myBtn" as={Link} to="RandomUsers" variant="primary">
          Go To User Page
        </Button>
        <Button className="myBtn" as={Link} to="RandomImages" variant="primary">
          Go To Image Page
        </Button>
      </div>
      <Outlet />
    </>
  );
}
export default Explore;
