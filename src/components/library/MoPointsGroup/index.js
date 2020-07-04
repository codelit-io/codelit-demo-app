import React from "react";

import * as ROUTES from "constants/routes";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const MoPointsGroup = ({ authUser, points, progress }) => (
  <ButtonGroup aria-label="Points and progress" variant="text" color="default">
    {authUser && <Button> {points ? `${points} Points` : "0 Points"}</Button>}
    {authUser && <Button>{progress}</Button>}
    {!authUser && (
      <Button to={ROUTES.SIGN_UP.path} component={Link}>
        Sign up to track your progress
        <CheckCircleIcon color="secondary" style={{ marginLeft: "10px" }} />
      </Button>
    )}
  </ButtonGroup>
);

export default MoPointsGroup;
