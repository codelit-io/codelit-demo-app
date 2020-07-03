import React from "react";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const MoPageHeader = ({ classes, text, children }) => {
  return (
    <Fade
      in={(text || children) && true}
      mountOnEnter
      timeout={{ enter: 200, exit: 800 }}
      unmountOnExit
    >
      <Typography variant="h2">
        <Box fontWeight="fontWeightLight" className={classes.text}>
          {text} {children}
        </Box>
      </Typography>
    </Fade>
  );
};

export default withStyles(styles)(MoPageHeader);
