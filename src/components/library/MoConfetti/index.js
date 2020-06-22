import React, { useState, useEffect } from "react";
import { ReactComponent as Confetti } from "assets/confetti.svg";
import Grow from "@material-ui/core/Grow";

const MoConfetti = ({ isActive }) => {
  console.log(isActive);
  const [state, setState] = useState({ isDisplayed: isActive });

  useEffect(() => {
    setState({ isDisplayed: isActive });
    setTimeout(() => {
      setState({ isDisplayed: false });
    }, 3000);
  }, [isActive]);

  return (
    <Grow in={state.isDisplayed} timeout={{ enter: 300, exit: 300 }}>
      <Confetti />
    </Grow>
  );
};

export default MoConfetti;
