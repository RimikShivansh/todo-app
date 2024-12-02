const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists." });
  }

  const user = new User({
    name,
    email,
    password,
  });

  await user.save();

  return res.status(201).json({
    message: "User registered successfully.",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      todos: user.todos,
    },
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const payload = { userId: user._id, email: user.email, name: user.name };
  const token = await jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 3600000,
  });

  res.status(200).json({
    message: "Login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      todos: user.todos,
    },
  });
});

const logoutUser = asyncHandler(async (_, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });

  res.status(200).json({
    message: "Logout successful",
  });
});

const getUserProfile = asyncHandler(async (req, res) => {
  const email = req?.user?.email;

  const user = await User.findOne({ email });
  return res.status(200).json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      todos: user.todos,
    },
  });
});

module.exports = { registerUser, loginUser, logoutUser, getUserProfile };
