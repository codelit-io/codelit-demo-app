import React, { useState, useEffect } from "react";
import { ReactComponent as Confetti } from "assets/confetti.svg";
import Grow from "@material-ui/core/Grow";

const MoConfetti = ({ isActive }) => {
  const [state, setState] = useState({ isDisplayed: isActive });

  useEffect(() => {
    setState({ isDisplayed: isActive });
    setTimeout(() => {
      setState({ isDisplayed: false });
    }, 4000);
  }, [isActive]);

  return (
    <Grow
      in={state.isDisplayed}
      timeout={{ enter: 400, exit: 400 }}
      mountOnEnter
      unmountOnExit
    >
      <Confetti />
    </Grow>
  );
};

export default MoConfetti;
