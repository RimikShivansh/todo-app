import { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../store/slices/todoSlice";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Both fields are required");
      return;
    }

    dispatch(addTodoAsync({ title, description }));

    // Reset the form
    setTitle("");
    setDescription("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 400,
        margin: "auto",
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Add New Todo
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        autoComplete="off"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        autoComplete="off"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Todo
      </Button>
    </Box>
  );
};

export default AddTodoForm;
