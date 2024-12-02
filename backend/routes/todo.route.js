const express = require("express");
const protect = require("../middlewares/auth.middleware");
const {
  getAllTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo.controller");

const router = express.Router();

// Private routes
router.route("/").get(protect, getAllTodos).post(protect, addTodo);
router.route("/:id").put(protect, updateTodo).delete(protect, deleteTodo);

module.exports = router;
