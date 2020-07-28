import React from "react";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import withStyles from "@material-ui/core/styles/withStyles";
import YouTubeIcon from "@material-ui/icons/YouTube";
import styles from "./styles";

const Footer = ({ classes }) => {
  return (
    <Fade
      in={true}
      mountOnEnter
      timeout={{ enter: 1200, exit: 1200 }}
      unmountOnExit
    >
      <div className={classes.footer}>
        <Container maxWidth="lg">
          <Grid container className={classes.container}>
            <Grid item md={12}>
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
                href="mailto:mo@moskool.com?subject=I 💙 MoSkool"
                aria-label="Mo Email"
                className={classes.footerButton}
                color="primary"
              >
                <MailIcon />
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fade>
  );
};

export default withStyles(styles)(Footer);
