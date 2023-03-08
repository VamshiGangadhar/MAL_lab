import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import "./whole.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <CssBaseline>
      <AppBar
        sx={{
          bgcolor: "black",
          position: "sticky",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ textAlign: "center" }} variant="h4">
            MMA LAB
          </Typography>
          {/*  */}
          <Button variant="contained">
            <Link className="Navgation-links" to="/">
              Home
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
};

export default Navbar;
