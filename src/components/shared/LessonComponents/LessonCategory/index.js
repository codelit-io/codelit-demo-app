import React from "react";

import MoTitle from "components/library/MoTitle";

const LessonCategory = ({ category, index }) => (
  <MoTitle
    text={category}
    fade
    margin={index === 0 ? "0px 0 12px" : "62px 0 12px"}
    width="100%"
  />
);

export default LessonCategory;
