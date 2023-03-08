import { Typography } from "@mui/material";
import React from "react";
import "./Rolling.css";
import "./whole.css";

const RollingMotion = () => {
  return (
    <div className="whole-project">
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sans-serif",
        }}
        variant="h3"
      >
        Rolling Object
      </Typography>
      <div className="rolling project-content-box">
        <div className="rolling-ball">.</div>
      </div>
    </div>
  );
};

export default RollingMotion;
