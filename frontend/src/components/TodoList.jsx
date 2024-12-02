import { Box, Card, CardContent, Container, Typography } from "@mui/material";

const TodoList = ({ todos }) => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Todo List
      </Typography>

      {/* Box to create a flexible container with wrapping behavior */}
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
            <Card sx={{ height: "100%" }}>
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
    </Container>
  );
};

export default TodoList;
