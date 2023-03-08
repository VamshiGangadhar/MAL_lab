import { Route, Routes } from "react-router-dom";
import "./App.css";
import Games from "./components/Games";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewtonSimulation from "./components/NewtonSimulation";
import PhysicsSimulation from "./components/PhysicsSimulation";
import Imagelist from "./components/Imagelist";
import RollingMotion from "./components/RollingMotion";
import Footer from "./components/Footer";
import PendulumDemo from "./components/Pendulumdemo";
import TuningForkSimulation from "./components/TuningForkSimulation";
import EightPuzzle from "./components/Games/EightPuzzle";
import TowersOfHanoi from "./components/Games/TowersOfHanoi";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/imagelist" element={<Imagelist />} />
        <Route path="/games" element={<Games />} />
        <Route path="/newtonsimulation" element={<NewtonSimulation />} />
        <Route path="/physicssimulation" element={<PhysicsSimulation />} />
        <Route
          path="/physics-simulation/rolling-motion"
          element={<RollingMotion />}
        />
        <Route
          path="/physics-simulation/gravity"
          element={<NewtonSimulation />}
        />
        <Route path="/physics-simulation/pendulum" element={<PendulumDemo />} />
        <Route
          path="/physics-simulation/tunningfork"
          element={<TuningForkSimulation />}
        />
        <Route path="/games/eightpuzzel" element={<EightPuzzle />} />
        <Route path="/games/towerofhanoi" element={<TowersOfHanoi />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
