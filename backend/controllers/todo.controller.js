const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/user.model");
const Todo = require("../models/todo.model");

const getAllTodos = asyncHandler(async (req, res) => {
  const email = req.user?.email;
  const user = await User.findOne({ email }).populate("todos");
  return res.status(200).json({ name: user.name, todos: user.todos });
});

const addTodo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const email = req.user?.email;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const todo = new Todo({ title, description, user: user._id });
  await todo.save();

  user.todos.push(todo._id);
  await user.save();

  return res.status(201).json({ message: "Todo added successfully" });
});

const deleteTodo = asyncHandler(async function (req, res) {
  const { id } = req.params;
  const email = req.user?.email;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (!todo.user.equals(user._id)) {
    return res
      .status(403)
      .json({ message: "You are not authorized to delete this todo" });
  }

  user.todos = user.todos.filter((todoId) => !todoId.equals(id));
  await user.save();

  await Todo.findByIdAndDelete(id);
  return res.status(200).json({ message: "Todo deleted successfully" });
});

const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const email = req.user?.email;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (!todo.user.equals(user._id)) {
    return res
      .status(403)
      .json({ message: "You are not authorized to update this todo" });
  }

  todo.title = title || todo.title;
  todo.description = description || todo.description;

  await todo.save();

  return res.status(200).json({ message: "Todo updated successfully", todo });
});

module.exports = { getAllTodos, addTodo, deleteTodo, updateTodo };
