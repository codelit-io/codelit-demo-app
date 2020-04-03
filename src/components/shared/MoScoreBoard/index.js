import React from "react";

import * as ROLES from "../../../constants/roles";
import * as ROUTES from "../../../constants/routes";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";

const MoScoreBoard = ({ authUser, points, progress }) => (
  <Fade
    direction="left"
    in={true}
    mountOnEnter
    timeout={{ enter: 800, exit: 400 }}
    unmountOnExit
  >
    <ButtonGroup
      aria-label="Points and progress"
      variant="text"
      color="default"
      style={{ marginBottom: "48px" }}
    >
      {authUser?.roles && !!authUser?.roles[ROLES.AUTHOR] && (
        <Button to={ROUTES.ADMIN.path} component={Link}>
          Add <PostAddIcon />
        </Button>
      )}
      {authUser && <Button> {points ? `${points} Points` : "0 Points"}</Button>}
      <Button>{progress}</Button>
      {!authUser && (
        <Button to={ROUTES.SIGN_UP.path} component={Link}>
          Sign up to earn points
          <CheckCircleIcon style={{ marginLeft: "10px" }} />
        </Button>
      )}
    </ButtonGroup>
  </Fade>
);

export default MoScoreBoard;
