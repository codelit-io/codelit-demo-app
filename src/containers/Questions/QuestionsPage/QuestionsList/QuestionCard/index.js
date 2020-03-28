import React from "react";

import Grid from "@material-ui/core/Grid";
import MoCard from "../../../../../components/shared/MoCard";

const QuestionCard = ({ question, points, url }) => (
  <Grid item xs={12} sm={6} md={3}>
    <MoCard points={points} item={question} url={url}></MoCard>
  </Grid>
);

export default QuestionCard;
