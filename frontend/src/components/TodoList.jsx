import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import EditTodoModal from "./modals/EditTodoModal";
import { deleteTodoAsync } from "../store/slices/todoSlice";
import { useDispatch } from "react-redux";

const TodoList = ({ todos }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const dispatch = useDispatch();

  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
    setEditModalOpen(true);
  };

  const handleModalClose = () => {
    setEditModalOpen(false);
    setSelectedTodo(null);
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodoAsync(todoId));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Todo List
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {todos.map((todo, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 calc(33.33% - 24px)",
              minWidth: "280px",
            }}
          >
            <Card sx={{ height: "100%", position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  display: "flex",
                  gap: 1,
                }}
              >
                <IconButton
                  size="small"
                  color="info"
                  onClick={() => handleEditClick(todo)}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleDeleteTodo(todo._id)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>

              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {todo.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {todo.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {selectedTodo && (
        <EditTodoModal
          open={editModalOpen}
          onClose={handleModalClose}
          todoId={selectedTodo._id}
          title={selectedTodo.title}
          description={selectedTodo.description}
        />
      )}
    </Container>
  );
};

export default TodoList;
