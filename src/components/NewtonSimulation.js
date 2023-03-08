import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import "./whole.css";
import FootGravity from "./FootGravity";
import { Typography } from "@mui/material";

const NewtonSimulation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    const render = Matter.Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
      },
    });

    const boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
    const boxB = Matter.Bodies.circle(150, 50, 80, 80);
    const ground = Matter.Bodies.rectangle(400, 610, 810, 60, {
      isStatic: true,
    });

    Matter.World.add(world, [boxA, boxB, ground]);

    Matter.Engine.run(engine);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      Matter.World.clear(world);
      Matter.Render.stop(render);
    };
  }, []);

  return (
    <>
      <Typography sx={{ textAlign: "center", m: 2 }} variant="h4">
        Gravity Simulation
      </Typography>
      <canvas ref={canvasRef} />
      <FootGravity />
    </>
  );
};

export default NewtonSimulation;
