import React from "react";
import Grid from "@material-ui/core/Grid";
import MoTitle from "../../../../components/shared/MoTitle";

const QuestionCategory = ({ category, index }) => (
  <Grid item xs={12} sm={12} md={12}>
    <MoTitle
      text={category}
      fade={true}
      margin={index === 0 ? "36px 0 26px" : "40px 0 36px"}
      width="100%"
    ></MoTitle>
  </Grid>
);

export default QuestionCategory;
