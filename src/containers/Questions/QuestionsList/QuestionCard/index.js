import React, { lazy } from "react";

const Grid = lazy(() => import("@material-ui/core/Grid"));
const MoCard = lazy(() => import("../../../../components/shared/MoCard"));

const QuestionCard = ({ question, userPoints, url }) => (
  <Grid item xs={12} sm={6} md={3}>
    <MoCard userPoints={userPoints} item={question} url={url}></MoCard>
  </Grid>
);

export default QuestionCard;
