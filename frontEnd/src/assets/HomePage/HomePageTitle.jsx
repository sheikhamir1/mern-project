import React from "react";
import "./HomePageTitle.css";

function HomePageTitle() {
  return (
    <>
      <div className="main_div">
        <div className="headingSetup">
          <h1 className="headline">
            <span className="highlight">ChatFlix</span> Connect With World.
          </h1>
        </div>
        <div className="headingSetup2">
          <p className="subheadline">
            ChatFlix helps you connect and share with the people in your life
            around the world.
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePageTitle;
