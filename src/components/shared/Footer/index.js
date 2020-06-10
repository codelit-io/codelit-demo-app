import React from "react";

import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = ({ classes }) => (
  <Fade
    in={true}
    timeout={{ enter: 1200, exit: 1200 }}
    mountOnEnter
    unmountOnExit
  >
    <Grid container spacing={4} className={classes.container}>
      <Grid item md={6}>
        <Button
          href="https://mosh-media.com"
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
      <Grid item md={6} className={classes.footerText}>
        <Button
          href="https://github.com/mo-sharif"
          aria-label="Mo Github"
          className={classes.footerButton}
          color="primary"
        >
          <GitHubIcon />
        </Button>
        <Button
          href="https://www.youtube.com/channel/UCWAPvsUtwlnbbHdxk_CX2yg/"
          aria-label="Mo YouTube Channel"
          className={classes.footerButton}
          color="primary"
        >
          <YouTubeIcon />
        </Button>
        <Button
          href="mailto:mo@mosh-media.com?subject=I 💙 MoSkool"
          aria-label="Mo Email"
          className={classes.footerButton}
          color="primary"
        >
          <MailIcon />
        </Button>
      </Grid>
    </Grid>
  </Fade>
);

export default withStyles(styles)(Footer);
