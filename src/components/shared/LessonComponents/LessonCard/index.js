import React from "react";

import MoCard from "components/library/MoCard";
import { withStyles } from "@material-ui/core";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import styles from "./styles";

const LessonCard = ({ classes, isDisabled, item, points, url }) => (
  <div className={classes.padding}>
    <MoCard
      isDisabled={isDisabled}
      points={points}
      item={item}
      url={url}
      IconComponent={SportsEsportsIcon}
    />
  </div>
);

export default withStyles(styles)(LessonCard);
