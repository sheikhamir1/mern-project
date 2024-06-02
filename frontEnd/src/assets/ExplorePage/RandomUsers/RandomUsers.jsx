import React from "react";
import { Link } from "react-router-dom";
import "./User.css";
import User from "./User";

// bootstrap components
import Button from "react-bootstrap/Button";

function RandomUsers() {
  return (
    <>
      <div className="setUpBtnUser">
        <Button as={Link} to="/explore" variant="primary">
          Back To Explore Page
        </Button>
      </div>
      <div
        className="main_user_dev"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </>
  );
}

export default RandomUsers;
