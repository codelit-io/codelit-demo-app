import React from "react";

import MoCard from "components/shared/MoCard";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

const LessonCard = ({ classes, isDisabled, item, points, url }) => (
  <div className={classes.padding}>
    <MoCard
      isDisabled={isDisabled}
      points={points}
      item={item}
      url={url}
      IconComponent={SportsEsportsIcon}
    ></MoCard>
  </div>
);

export default withStyles(styles)(LessonCard);
