const { body } = require("express-validator");

const notesValidation = [
  body("title")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),
  body("title")
    .isLength({ max: 30 })
    .withMessage("Title must not exceed 30 characters"),
  body("description").notEmpty().withMessage("Description is required"),
  body("tag")
    .isLength({ max: 20 })
    .withMessage("Tag must not exceed 10 characters"),
  body("tag")
    .isLength({ min: 3 })
    .withMessage("Tag must be at least 3 characters"),
];

module.exports = notesValidation;
