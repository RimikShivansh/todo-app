import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodoAsync } from "../../store/slices/todoSlice";

const EditTodoModal = ({ open, onClose, todoId, title, description }) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const dispatch = useDispatch();

  const handleSave = async () => {
    const actionResult = await dispatch(
      editTodoAsync({
        todoId,
        title: editedTitle,
        description: editedDescription,
      })
    );

    try {
      if (editTodoAsync.fulfilled.match(actionResult)) {
        onClose();
      } else {
        console.log("Edit failed: ", actionResult.payload);
      }
    } catch (error) {
      console.error("Error during edit: ", error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          Edit Todo
        </Typography>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditTodoModal;
