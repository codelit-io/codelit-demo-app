import React from "react";

import MoTitle from "../../../../../components/shared/MoTitle";
import Grid from "@material-ui/core/Grid";

const QuestionCategory = ({ category, index }) => (
  <Grid item xs={12} sm={12} md={12}>
    <MoTitle
      text={category}
      fade={true}
      margin={index === 0 ? "0px 0 36px" : "66px 0 62px"}
      width="100%"
    ></MoTitle>
  </Grid>
);

export default QuestionCategory;
