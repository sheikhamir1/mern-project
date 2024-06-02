import React, { useState, useContext, useEffect } from "react";
import NoteContext from "../../UseContext/notes/NoteContext";
import { Modal, Button, Form, Alert } from "react-bootstrap";
// import AlertControl from "../../AllAlert/AlertControl";

const MyModal = ({ note, setShow }) => {
  const { EditNotes } = useContext(NoteContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
  });

  // const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (note) {
      setFormData({
        title: note.title,
        description: note.description,
        tag: note.tag,
      });
    }
  }, [note]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    await EditNotes(
      note._id,
      formData.title,
      formData.description,
      formData.tag
    );
    // setShowButton(false);

    setShow(false);
  };

  return (
    <>
      <Modal show onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder="Title Should be min 3 and max 30 characters to update it"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Description should not be Empty"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formTag">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                name="tag"
                placeholder="Tags Should be min 3 and max 20 characters to update it"
                value={formData.tag}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          {formData.title.length < 3 ||
          formData.description.length < 2 ||
          formData.tag.length < 3 ? null : (
            <Button variant="primary" disabled={false} onClick={handleSave}>
              Save Update
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
