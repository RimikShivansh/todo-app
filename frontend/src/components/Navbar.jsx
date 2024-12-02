import LogoIcon from "@mui/icons-material/Adb";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUserAsync } from "../store/slices/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const actionResult = await dispatch(logoutUserAsync());

      if (logoutUserAsync.fulfilled.match(actionResult)) {
        navigate("/");
      } else {
        console.log("Logout failed: ", actionResult.payload);
      }
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left Profile Dropdown */}
        <Box sx={{ flexGrow: 1 }} display={"flex"} alignItems={"center"}>
          <IconButton edge="end" color="inherit">
            <LogoIcon />
          </IconButton>
        </Box>

        {/* Logo on Right */}
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
