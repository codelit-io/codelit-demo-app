import React from "react";

import * as ROUTES from "constants/routes";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";

const MoProgressBar = ({ authUser, points, progress }) => (
  <Fade
    direction="left"
    in
    mountOnEnter
    timeout={{ enter: 800, exit: 400 }}
    unmountOnExit
  >
    <ButtonGroup
      aria-label="Points and progress"
      variant="text"
      color="default"
    >
      {authUser && <Button> {points ? `${points} Points` : "0 Points"}</Button>}
      {authUser && <Button>{progress}</Button>}
      {!authUser && (
        <Button to={ROUTES.SIGN_UP.path} component={Link}>
          Sign up to track your progress
          <CheckCircleIcon style={{ marginLeft: "10px" }} />
        </Button>
      )}
    </ButtonGroup>
  </Fade>
);

export default MoProgressBar;
