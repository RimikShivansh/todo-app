import LogoIcon from "@mui/icons-material/Adb";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
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
