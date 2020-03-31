import React from "react";

import * as ROLES from "../../../constants/roles";
import * as ROUTES from "../../../constants/routes";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";

const MoScoreBoard = ({ authUser, numberOfQuestions, points }) => (
  <Fade
    direction="left"
    in={authUser && true}
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
      {authUser.roles && !!authUser.roles[ROLES.AUTHOR] && (
        <Button to={ROUTES.ADMIN.path} component={Link}>
          Add <PostAddIcon />
        </Button>
      )}
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
