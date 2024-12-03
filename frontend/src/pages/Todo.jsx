import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "../components/AddTodoForm";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import {
  addTodoloading,
  deleteTodoloading,
  editTodoloading,
  getAllTodosAsync,
  todos,
} from "../store/slices/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(todos);
  const addTodoStatus = useSelector(addTodoloading);
  const editTodoStatus = useSelector(editTodoloading);
  const deleteTodoStatus = useSelector(deleteTodoloading);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      dispatch(getAllTodosAsync());
      firstRender.current = false;
      return;
    }

    if (
      addTodoStatus === "success" ||
      editTodoStatus === "success" ||
      deleteTodoStatus === "success"
    ) {
      dispatch(getAllTodosAsync());
    }
  }, [addTodoStatus, editTodoStatus, deleteTodoStatus]);

  return (
    <>
      <Navbar />
      <Box my={4}>
        <AddTodoForm />
      </Box>
      <TodoList todos={allTodos} />
    </>
  );
};

export default Todo;
