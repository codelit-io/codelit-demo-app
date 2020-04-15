import React from "react";

import Grid from "@material-ui/core/Grid";
import MoCard from "../../../../../components/shared/MoCard";

const QuestionCard = ({ isDisabled, question, points, url }) => (
  <Grid item xs={12} sm={6} md={6}>
    <MoCard
      isDisabled={isDisabled}
      points={points}
      item={question}
      url={url}
    ></MoCard>
  </Grid>
);

export default QuestionCard;
