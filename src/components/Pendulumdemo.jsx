import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useRef, useEffect } from "react";

function PendulumDemo() {
  const canvasRef = useRef();
  const [angle, setAngle] = useState(Math.PI / 4);
  const [angularVelocity, setAngularVelocity] = useState(0);
  const [dt , setDt] = useState(0.8);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw pendulum
    const x0 = canvas.width / 2;
    const y0 = 150;
    const x1 = x0 + 100 * Math.sin(angle);
    const y1 = y0 + 100 * Math.cos(angle);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x1, y1, 10, 0, 2 * Math.PI);
    ctx.fill();
  }, [angle]);

  const Increase = () =>{
    setDt(dt+0.2);
  }

  const Decrease = () =>{
    setDt(dt-0.2);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate new angle and angular velocity using the equation of motion for a pendulum
      const g = 9.81; // gravitational acceleration in m/s^2
      const L = 100; // length of pendulum in pixels
      // let dt = 0.8; // time step in seconds
      const newAngularVelocity = angularVelocity - (g / L) * Math.sin(angle) * dt;
      const newAngle = angle + newAngularVelocity * dt;
      setAngularVelocity(newAngularVelocity);
      setAngle(newAngle);
    }, 10);

    return () => clearInterval(intervalId);
  }, [angle, angularVelocity]);
  

  return (
    <Box sx={{width : 1000}}>
        <Typography sx={{textAlign : "center"}} variant="h4">Simple Pendulum</Typography>
      <canvas ref={canvasRef} width={300} height={300}/><br />
      <Box sx={{textAlign : "center"}}>
      <Button onClick={Decrease} sx={{m : 2}} variant="contained">Decrease</Button>
      <Button onClick={Increase} variant="contained">Increase</Button>
      </Box>
    </Box>
  );
}

export default PendulumDemo;