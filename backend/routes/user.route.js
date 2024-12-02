const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
} = require("../controllers/user.controller");
const protect = require("../middlewares/auth.middleware");

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Private routes
router.route("/").get(protect, getUserProfile);

module.exports = router;
