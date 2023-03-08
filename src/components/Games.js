import { Button, CssBaseline, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./whole.css";

const itemData = [
  {
    img: "/images/tictactoe.png",
    alt: "TicTacToe",
    title: "TicTacToe",
    viewproj: "https://vamshigangadhar.github.io/tic-tac-toe/",
  },
  {
    img: "/images/eightpuzzel.jpeg",
    alt: "Eight Puzzel",
    title: "Eight Puzzel",
    viewproj: "/games/eightpuzzel",
  },
  {
    img: "/images/toh.png",
    alt: "Towers Of Hanoi",
    title: "Towers Of Hanoi",
    viewproj: "/games/towerofhanoi",
  },
];

const ImageCard = ({ item }) => (
  <div className="project-box" key={item.alt}>
    <img className="project-image" src={item.img} alt={item.alt} />
    <Typography sx={{ m: 1.5 }} gutterBottom variant="h5" component="div">
      {item.title}
    </Typography>
    <Button color="success" variant="contained">
      <Link className="project-link" to={item.viewproj}>
        View Project
      </Link>
    </Button>
  </div>
);

const Games = () => {
  return (
    <CssBaseline>
      <div className="physics-simulation">
        <Typography
          sx={{
            p: 1,
            color: "#20262E",
            textAlign: "center",
            fontFamily: "Sans-serif",
          }}
          variant="h3"
        >
          Games
        </Typography>
        <div className="whole-simulations">
          {itemData.map((item) => (
            <ImageCard key={item.alt} item={item} />
          ))}
        </div>
      </div>
    </CssBaseline>
  );
};

export default Games;
