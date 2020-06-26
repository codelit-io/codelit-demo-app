import React from "react";

import MoCard from "components/library/MoCard";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const LessonCard = ({
  classes,
  IconComponent,
  isDisabled,
  item,
  index,
  points,
  url
}) => (
  <div className={classes.padding}>
    <MoCard
      isDisabled={isDisabled}
      points={points}
      item={item}
      index={index}
      url={url}
      IconComponent={IconComponent}
    />
  </div>
);

export default withStyles(styles)(LessonCard);
