import React from "react";

import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const Footer = ({ classes }) => (
  <Fade
    in={true}
    timeout={{ enter: 2200, exit: 1200 }}
    mountOnEnter
    unmountOnExit
  >
    <Grid container spacing={4} className={classes.container}>
      <Grid item md={12} className={classes.footerText}>
        <Button
          href="https://github.com/mo-sharif"
          aria-label="Mo Sharif Github"
          className={classes.footerButton}
        >
          Developed with{" "}
          <span role="img" aria-label="heart emoji">
            &nbsp;💙
          </span>{" "}
          by Mo Sharif
        </Button>
      </Grid>
    </Grid>
  </Fade>
);

export default withStyles(styles)(Footer);
