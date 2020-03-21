import React from "react";

import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

const MoPageSubtitle = ({ subtitle }) => (
  <Fade timeout={{ enter: 2000 }} in={true}>
    <Typography
      variant="body1"
      style={{ paddingLeft: "4px", color: "#484848" }}
    >
      {subtitle}
    </Typography>
  </Fade>
);

export default MoPageSubtitle;
