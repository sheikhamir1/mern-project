// import all the required modules
const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const User = require("../modles/UserSchema"); // Ensure this path is correct
const signUpValidation = require("./SignUpValidate");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loginValidation = require("../routes/LoginValedate");
const GetUser = require("../middleware/GetUser");

const JWT_SECRET = "MYNAMEISAMIRSOHAILSHIEK";

// to delete all records from database rear use while testing

// const data = async (req, res) => {
//   const response = await User.deleteOne({});
//   console.log(response);
// };
// data();

// post route for sign up
// first parameter is for the route path and second parameter is for validation (through npm package express-validator) third parameter is for request and response
router.post("/signup", signUpValidation, async (req, res) => {
  // first use validationResult to check if there are any errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  console.log(req.body);

  // check if user already exists in database using email
  try {
    let { email, firstName, lastName, password, confirmPassword } = req.body;
    const existingUser = await User.findOne({ email });
    // console.log(existingUser);
    if (existingUser) {
      // console.log("User already exists");
      return res
        .status(400)
        .json({ success: false, errors: [{ msg: "email already exists" }] });
    }

    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    password = hashedPassword;
    confirmPassword = hashedPassword;

    // if user doesn't exist, create a new user
    const newUser = new User({
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
    });

    const JWTToken = jwt.sign({ id: newUser._id }, JWT_SECRET);

    // console.log(`this is JWTToken ID => ${newUser._id}`);
    // console.log(JWTToken);

    await newUser.save(JWTToken);
    // console.log("User registered successfully");
    res
      .status(200)
      .json({ success: true, JWTToken, msg: "User registered successfully" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

// post route for sign in
//  authenticate user if he/she is exist in database
router.post("/login", loginValidation, async (req, res) => {
  // first use validationResult to check if there are any errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  // check if user already exists in database using email
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, errors: [{ msg: "Invalid credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, errors: [{ msg: "Invalid credentials" }] });
    }

    const JWTToken = jwt.sign({ id: user._id }, JWT_SECRET);
    res
      .status(200)
      .json({ success: true, JWTToken, msg: "User logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

// post route for check if user is authenticated

router.post("/getuser", GetUser, async (req, res) => {
  try {
    const userID = req.user;
    if (!userID) {
      return res.status(400).json({ errors: [{ msg: "User not found" }] });
    }
    const user = await User.findById(userID).select(
      "-password -confirmPassword"
    );
    console.log(user);

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "internal Server error" });
  }
});

module.exports = router;
