import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAsync } from "../store/slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("test1@test.com");
  const [password, setPassword] = useState("test123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const actionResult = await dispatch(loginUserAsync({ email, password }));

      if (loginUserAsync.fulfilled.match(actionResult)) {
        navigate("/todo");
      } else {
        console.log("Login failed: ", actionResult.payload);
      }
    } catch (error) {
      console.error("Error during login: ", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={6}
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/register">
                  <Button
                    size="small"
                    sx={{
                      textTransform: "none",
                      fontSize: "0.85rem",
                      color: "primary.main",
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
