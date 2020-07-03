import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Fade from "@material-ui/core/Fade";
import styles from "./styles";

const MoPageContent = ({ classes, children, text }) => (
  <Fade
    in={(text || children) && true}
    mountOnEnter
    timeout={{ enter: 200, exit: 800 }}
    unmountOnExit
  >
    <Typography variant="h6">
      <Box fontWeight="fontWeightLight" className={classes.text}>
        {text} {children}
      </Box>
    </Typography>
  </Fade>
);

export default withStyles(styles)(MoPageContent);
