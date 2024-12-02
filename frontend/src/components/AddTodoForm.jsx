import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

const AddTodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Both fields are required");
      return;
    }

    onAddTodo({
      title,
      description,
    });

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
      <Typography variant="h6" sx={{ mb: 2 }}>
        Add New Todo
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        required
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Description"
        variant="outlined"
        required
        fullWidth
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
