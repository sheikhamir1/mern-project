const express = require("express");
const router = express.Router();
const GetUser = require("../middleware/GetUser");
const Note = require("../modles/Notes");
const notesValidation = require("./NotesValidate");
const { validationResult } = require("express-validator");

// api for getting all notes
router.get("/getallnotes", GetUser, async (req, res) => {
  const notes = await Note.find({ user: req.user });
  res.json(notes);
});

// api for creating new note
router.post("/createnote", GetUser, notesValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { title, description, tag } = req.body;
  try {
    const newNote = new Note({
      title,
      description,
      tag,
      user: req.user,
    });
    const savedNote = await newNote.save();
    res.json(savedNote);
    console.log("Note has been Created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "internal Server error" });
  }
});

// api for updating existing note
router.put("/updatenote/:id", GetUser, notesValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { title, description, tag } = req.body;

    const newNote = {};
    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tag) newNote.tag = tag;
    // find the note to be updated and update it

    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
    console.log("Note has been Updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "internal Server error" });
  }
});

// api for deleting existing note
router.delete("/deletenote/:id", GetUser, async (req, res) => {
  try {
    // find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
    console.log("Note has been deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "internal Server error" });
  }
});

module.exports = router;
