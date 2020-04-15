import React from "react";

import Grid from "@material-ui/core/Grid";
import MoCard from "../../../../../components/shared/MoCard";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const QuestionCard = ({ classes, isDisabled, question, points, url }) => (
  <Grid item xs={12} sm={6} md={6} className={classes.padding}>
    <MoCard
      isDisabled={isDisabled}
      points={points}
      item={question}
      url={url}
    ></MoCard>
  </Grid>
);

export default withStyles(styles)(QuestionCard);
