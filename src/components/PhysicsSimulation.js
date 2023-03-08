import { Button, CssBaseline, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./whole.css";

const itemData = [
  {
    img: "/images/pendulum.jpg",
    alt: "Pendulum",
    title: "Pendulum Motion",
    viewproj: "/physics-simulation/pendulum",
  },
  {
    img: "/images/gravity.png",
    alt: "gravity",
    title: "Motion in Gravity",
    viewproj: "/physics-simulation/gravity",
  },
  {
    img: "/images/tuneingfork.png",
    alt: "Tuning Fork",
    title: "Tuneing Fork",
    viewproj: "/physics-simulation/tunningfork",
  },
  {
    img: "/images/rollingmotion.png",
    alt: "Rolling Motion",
    title: "Rolling Motion",
    viewproj: "/physics-simulation/rolling-motion",
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

const PhysicsSimulation = () => {
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
          Physics Simulation
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

export default PhysicsSimulation;
