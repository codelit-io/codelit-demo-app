import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

const MoScoreBoard = ({ numberOfQuestions, points }) => (
  <Fade
    direction="left"
    in={points && true}
    mountOnEnter
    timeout={{ enter: 800, exit: 400 }}
    unmountOnExit
  >
    <ButtonGroup
      aria-label="Points and progress"
      variant="text"
      color="default"
      style={{marginBottom: "48px"}}
    >
      <Button> {points ? `${points} Points` : "0 Points"}</Button>
      <Button>
        {numberOfQuestions
          ? Math.round((points / numberOfQuestions) * 100) + "% Complete"
          : "..."}
      </Button>
    </ButtonGroup>
  </Fade>
);

export default MoScoreBoard;
