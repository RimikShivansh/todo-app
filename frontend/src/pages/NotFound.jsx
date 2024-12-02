import { Button, Container, Typography } from "@mui/material";

const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontWeight: "bold", color: "#1976d2" }}
      >
        404
      </Typography>
      <Typography variant="h5" component="p" sx={{ mb: 2, color: "#555" }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#777" }}>
        It might have been removed or the URL might be incorrect.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{
          paddingX: 4,
          paddingY: 1,
          fontSize: "1rem",
          textTransform: "none",
        }}
      >
        Go to Homepage
      </Button>
    </Container>
  );
};

export default NotFound;
