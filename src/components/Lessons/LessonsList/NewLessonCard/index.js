import React from "react";

import MoLink from "components/shared/MoLink";
import styles from "./styles";
import { withStyles } from "@material-ui/core";

const NewLessonCard = ({ classes, url }) => (
  <div className={classes.padding}>
    <MoLink text="Add New Lesson" href={url} />
  </div>
);
export default withStyles(styles)(NewLessonCard);
