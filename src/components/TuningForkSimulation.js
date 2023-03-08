import { Button, TextField, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import "./TuningForkSimulation.css";

const TuningForkSimulation = () => {
  const [time, setTime] = useState(0);
  const [frequency, setFrequency] = useState(440);
  const [amplitude, setAmplitude] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  const animationRef = useRef();

  const calculateDisplacement = (timeElapsed) => {
    const angularFrequency = 2 * Math.PI * frequency;
    const displacement = amplitude * Math.sin(angularFrequency * timeElapsed);
    return displacement;
  };

  const stepSimulation = () => {
    const currentTime = performance.now() / 1000;
    const timeElapsed = currentTime - time;
    setTime(currentTime);
    const displacement = calculateDisplacement(timeElapsed);
    setAmplitude(displacement);
    animationRef.current = requestAnimationFrame(stepSimulation);
  };

  const startSimulation = () => {
    setIsRunning(true);
    setTime(performance.now() / 1000);
    animationRef.current = requestAnimationFrame(stepSimulation);
  };

  const stopSimulation = () => {
    setIsRunning(false);
    cancelAnimationFrame(animationRef.current);
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div>
      <Typography sx={{ textAlign: "center", m: 2 }} variant="h4">
        Tuneing Fork
      </Typography>
      <div className="simulation-container">
        <div
          className="tuning-fork"
          style={{ transform: `rotate(${amplitude}deg)` }}
        />
        <div className="controls">
          <label>
            Frequency (Hz):
            <TextField
              type="number"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
            />
          </label>
        </div>
        <Button onClick={isRunning ? stopSimulation : startSimulation}>
          {isRunning ? "Stop" : "Start"}
        </Button>
      </div>
    </div>
  );
};

export default TuningForkSimulation;
