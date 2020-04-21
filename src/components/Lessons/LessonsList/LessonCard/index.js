import React from "react";

import MoCard from "../../../shared/MoCard";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const LessonCard = ({ classes, isDisabled, item, points, url }) => (
  <div className={classes.padding}>
    <MoCard
      isDisabled={isDisabled}
      points={points}
      item={item}
      url={url}
    ></MoCard>
  </div>
);

export default withStyles(styles)(LessonCard);
