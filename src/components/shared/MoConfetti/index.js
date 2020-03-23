import React, { lazy } from "react";

const Confetti = lazy(() => import("react-dom-confetti"));

const config = {
  angle: 260,
  spread: 285,
  startVelocity: 30,
  elementCount: "102",
  duration: "1000",
  width: "12px",
  height: "12px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const MoConfetti = ({ isActive }) => {
  return (
    <div style={{ position: "absolute", top: "0", left: "50%" }}>
      <Confetti active={isActive} config={config} />
    </div>
  );
};

export default MoConfetti;
