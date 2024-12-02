import { Box, Container, Paper, Typography } from "@mui/material";

const ErrorPage = ({ error }) => {
  const errorMessage = error?.message || "An unexpected error occurred.";

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center", mt: 4 }}>
        <Box>
          <Typography variant="h4" color="error" gutterBottom>
            Oops! Something Went Wrong
          </Typography>
          <Typography variant="h6" paragraph>
            {errorMessage}
          </Typography>
          {/* <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            sx={{ textTransform: "none" }}
          >
            Go to Home
          </Button> */}
        </Box>
      </Paper>
    </Container>
  );
};

export default ErrorPage;
