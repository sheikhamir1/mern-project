import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
// import CreateNote from "../BlogPage/CreateNotes/CreateNote";

function AlertControl() {
  // const [showAlert, setShowAlert] = useState(false);

  // const handleClick = () => {
  //   setShowAlert(true);
  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 5000); // Hide alert after 3 seconds
  // };

  return (
    <>
      {/* {showAlert && <Alert variant="success">Success</Alert>}
      <Button style={{ display: "none" }} onClick={handleClick}>
        Show Alert
      </Button> */}
      <Alert variant="success">Successfully Added</Alert>
    </>
  );
}

export default AlertControl;
