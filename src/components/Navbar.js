import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
   <AppBar position="static" style={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h2" style={{ flexGrow: 1 }}>
          Smile
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/analysis">
          Analysis
        </Button>
        <Button color="inherit" component={Link} to="/suggestions">
          Suggestions
        </Button>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
         
       
      </Toolbar>
    </AppBar> 
  );
};

export default Navbar;



