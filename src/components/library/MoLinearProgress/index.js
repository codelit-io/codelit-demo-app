import React from "react";
import Fade from "@material-ui/core/Fade";
import LinearProgress from "@material-ui/core/LinearProgress";

/**
 *
 * @param {number} percent - this will be in the format 0.x
 */

const MoLinearProgress = ({ percent }) => (
  <Fade in mountOnEnter timeout={{ enter: 800 }} unmountOnExit>
    <LinearProgress
      variant="buffer"
      value={percent}
      valueBuffer={10}
      color="secondary"
    />
  </Fade>
);

export default MoLinearProgress;
