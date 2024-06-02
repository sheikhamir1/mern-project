const { body } = require("express-validator");

const signUpValidation = [
  body("email").notEmpty().withMessage("Email is required"),
  body("email").isEmail().withMessage("Please Enter a valid Email Address"),
  body("firstName").notEmpty().withMessage("First Name is required"),
  body("firstName")
    .isLength({ min: 2, max: 10 })
    .withMessage("First Name must be between 2 and 10 characters"),
  body("lastName").notEmpty().withMessage("Last Name is required"),
  body("lastName")
    .isLength({ min: 2, max: 10 })
    .withMessage("Last Name must be between 2 and 10 characters"),

  body("password").notEmpty().withMessage("Password is required"),
  body("password")
    .isLength({ min: 8, max: 25 })
    .withMessage("Password must be between 8 and 25 characters"),

  body("confirmPassword").notEmpty().withMessage("Password is required"),
  body("confirmPassword")
    .isLength({ min: 8, max: 25 })
    .withMessage("Password must be between 8 and 25 characters"),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("confirmation Password does not match password");
    }
    return true;
  }),
];

module.exports = signUpValidation;
