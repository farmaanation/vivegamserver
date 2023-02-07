const express = require("express");

// controller functions
const {
  signupUser,
  loginUser,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// Get Users route
router.get("/", getUsers);

module.exports = router;
