import React from "react";

import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";

const Footer = ({ classes, fade }) => (
  <Fade
    in={fade && true}
    timeout={{ enter: 1200, exit: 1200 }}
    mountOnEnter
    unmountOnExit
  >
    <Grid container spacing={4}>
      <Grid item md={6}>
        test
      </Grid>
      <Grid item md={6}>
        test
      </Grid>
    </Grid>
  </Fade>
);

export default withStyles(styles)(Footer);
