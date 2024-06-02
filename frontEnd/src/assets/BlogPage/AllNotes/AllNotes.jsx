import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../../UseContext/notes/NoteContext";
import "./AllNotes.css";
import "./ShowNotes.css";

// icons
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// bootstrap components
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MyModal from "./MyModal";
import { Button, Alert } from "react-bootstrap";

function AllNotes() {
  const Context = useContext(NoteContext);
  const { UserNotes, DeleteNotes, FetchAllNotes } = Context;
  const [show, setShow] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [fetchAlert, setFetchAlert] = useState("");

  const navigate = useNavigate();

  const HandleDelete = (_id) => {
    DeleteNotes(_id);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      FetchAllNotes();
    } else {
      // setFetchAlert("please login to get access to this page");
      // setShowErrorAlert(true);
      // setTimeout(() => {
      //   setShowErrorAlert(false);
      // }, 4000);
      navigate("/Signin");
    }
  }, []);

  const HandleUpdate = (note) => {
    // console.log(note);
    setShow(true);
    setCurrentNote(note);
  };

  return (
    <>
      {/* {showErrorAlert && <Alert variant="danger ">{fetchAlert}</Alert>} */}
      {showAlert && <Alert variant="danger ">Note Deleted</Alert>}
      <div className="ModalSetup">
        {show && <MyModal note={currentNote} setShow={setShow} />}
      </div>
      <div className="setUpAllNotes">
        {UserNotes.map((note) => {
          return (
            <Card className="AllNotesCardsetup" key={note._id}>
              <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>{note.description}</Card.Text>
                <Card.Title>{note.tag}</Card.Title>

                <FaEdit
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                  onClick={() => HandleUpdate(note)}
                />
                <MdDelete
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                  onClick={() => HandleDelete(note._id)}
                />
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default AllNotes;
