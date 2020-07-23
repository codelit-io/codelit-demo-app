import React from "react";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const MoPointsGroup = ({ authUser, points, progress }) => (
  <ButtonGroup aria-label="Points and progress" variant="text" color="default">
    <Button> {points ? `${points} Points` : "0 Points"}</Button>
    <Button>{progress}</Button>
  </ButtonGroup>
);

export default MoPointsGroup;
