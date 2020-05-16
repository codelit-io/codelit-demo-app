import React from "react";
import Fade from "@material-ui/core/Fade";
import LinearProgress from "@material-ui/core/LinearProgress";

/**
 *
 * @param {percent} percent - this will be in the format 0.x
 */

const MoLinearProgress = ({ percent }) => (
  <Fade in={true} timeout={{ enter: 800 }}>
    <LinearProgress
      variant="buffer"
      value={percent}
      valueBuffer={10}
      color="primary"
    />
  </Fade>
);

export default MoLinearProgress;
