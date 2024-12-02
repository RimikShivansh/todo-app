import { Box } from "@mui/material";
import AddTodoForm from "../components/AddTodoForm";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import todos from "../data/todos.json";

const Todo = () => {
  return (
    <>
      <Navbar />
      <Box my={4}>
        <AddTodoForm />
      </Box>
      <TodoList todos={todos} />
    </>
  );
};

export default Todo;
