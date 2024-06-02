import React, { useEffect, useState } from "react";
import NoteContext from "./NoteContext";

// fetching all notes

const NoteStatus = (props) => {
  const [UserNotes, setUserNotes] = useState([]);
  const ApiUrl = "http://localhost:5000";

  // button setup
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginButton();
    }
  }, []);

  const loginButton = () => {
    // Perform loginButton logic here
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic here
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const FetchAllNotes = async () => {
    const response = await fetch(`${ApiUrl}/api/notes/getallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    if (json.error) {
      setUserNotes([]);
      // console.log("please login first");
    } else {
      // console.log("fetching all notes", json);
      setUserNotes(json);
    }
  };
  // adding notes
  const AddNotes = async (title, description, tag, _id) => {
    const response = await fetch(`${ApiUrl}/api/notes/createnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        _id: _id,
        title: title,
        description: description,
        tag: tag,
      }),
    });
    const json = await response.json();
    // console.log("new note added", json);
    setUserNotes((prevNotes) => [...prevNotes, json]);
  };

  // updating notes
  const EditNotes = async (_id, title, description, tag) => {
    const response = await fetch(`${ApiUrl}/api/notes/updatenote/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }),
    });
    await response.json();
    // console.log("note edited", json);

    const updatedNotes = UserNotes.map((note) =>
      note._id === _id ? { ...note, title, description, tag } : note
    );
    setUserNotes(updatedNotes);
  };

  const DeleteNotes = async (_id) => {
    setUserNotes(UserNotes.filter((note) => note._id !== _id));
    const response = await fetch(`${ApiUrl}/api/notes/deletenote/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        _id: _id,
      }),
    });
    const json = await response.json();
    // console.log("note deleted", json);
  };

  return (
    <NoteContext.Provider
      value={{
        UserNotes,
        setUserNotes,
        AddNotes,
        EditNotes,
        DeleteNotes,
        FetchAllNotes,
        isLoggedIn,
        loginButton,
        logout,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteStatus;
