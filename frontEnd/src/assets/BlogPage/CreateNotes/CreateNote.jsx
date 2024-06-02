import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateNote.css";
import AlertControl from "../../AllAlert/AlertControl";
import NoteContext from "../../UseContext/notes/NoteContext";
import { useForm } from "react-hook-form";

function Blog() {
  const context = useContext(NoteContext);
  const { AddNotes } = context;

  const [show, setShowAlert] = useState(false);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    AddNotes(data.title, data.description, data.tag);
    // const newNote = await AddNotes(data.title, data.description, data.tag);
    // setUserNotes([...UserNotes, newNote]);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    reset();
  };

  return (
    <>
      {show && <AlertControl />}
      <div className="setNoteForm">
        <Form className="CreateNoteForm">
          <Form.Group className="mb-3">
            <Form.Label>Enter Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Title"
              className="blogField"
              name="title"
              {...register("title", {
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Title must be at most 30 characters",
                },
              })}
            />
            {errors.title && (
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors.title.message}
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Description"
              className="blogField"
              name="description"
              {...register("description", {
                required: { value: true, message: "Description is required" },
                minLength: {
                  value: 2,
                  message: "Description must be at least 2 characters",
                },
              })}
            />
            {errors.description && (
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors.description.message}
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Add Your Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add Your Tags"
              className="blogField"
              name="tag"
              {...register("tag", {
                required: { value: true, message: "Tag is required" },
                minLength: {
                  value: 3,
                  message: "Tag must be at least 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Tag must be at most 20 characters",
                },
              })}
            />
            {errors.tag && (
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors.tag.message}
              </span>
            )}
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Add Note
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Blog;
