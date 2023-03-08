import React from "react";
import "./whole.css";

const FootGravity = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className="foot">
      <h4>Gravity Simulation</h4>
      <button className="btn" onClick={handleReload}>
        ReSimulate
      </button>
    </div>
  );
};

export default FootGravity;
