import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./whole.css";

const Home = () => {
  return (
    <CssBaseline>
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignContent: "center",
          textAlign: "center",
          bgcolor: "#013158",
        }}
      >
        <Container className="containing">
          <Link className="link" to="/imagelist">
            <Typography
              className="link"
              sx={{
                color: "#f5f5f5",
              }}
              variant="h5"
            >
              Physics Simulation
            </Typography>
          </Link>
          <Link to="/physicssimulation">
            <img
              className="field"
              src="/images/physics simulation.jpg"
              alt="some"
            />
          </Link>
        </Container>
        <Container className="containing">
          <Link className="link" to="/games">
            <Typography
              className="link"
              sx={{
                color: "#f5f5f5",
              }}
              variant="h5"
            >
              Games
            </Typography>
          </Link>
          <Link to="/games">
            <img className="field" src="/images/Games.jpg" alt="some" />
          </Link>
        </Container>
      </Box>
    </CssBaseline>
  );
};

export default Home;
