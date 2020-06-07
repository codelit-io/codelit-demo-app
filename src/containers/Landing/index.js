import React from "react";

import * as ROUTES from "constants/routes";

import CheckIcon from "@material-ui/icons/Check";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import MoLinkButton from "components/library/MoLinkButton";
import MoLink from "components/library/MoLink";
import MoPageHeader from "components/library/MoPageHeader";
import MoPageSubtitle from "components/library/MoPageSubtitle";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Footer from "components/shared/Footer";

const LandingPage = ({ classes }) => {
  return (
    <>
      <Grid container spacing={4} className={classes.container}>
        <Grid item sm={12} md={6} xs={12}>
          <Fade in={true} mountOnEnter timeout={{ enter: 800 }} unmountOnExit>
            <div className={classes.responsiveGrid}>
              <MoPageHeader>Master React without the fees</MoPageHeader>
              <MoPageSubtitle margin="36px 0 36px">
                Introducing a Modern learning experience for everyone
              </MoPageSubtitle>
              <MoLinkButton
                text="Get started"
                href={ROUTES.EASY_COLLECTIONS.path}
              />
            </div>
          </Fade>
        </Grid>

        <Grid item sm={12} md={6} xs={12}>
          <video autoPlay muted loop style={{ width: "100%" }}>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/landing%2Fmoskool_landing.mp4?alt=media&token=c36b719c-99ee-4db2-9fce-da212153b4a5"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Grid>
      </Grid>

      <Grid container spacing={4} className={classes.container}>
        <Grid item sm={12} md={6} xs={12}>
          <MoPageHeader>Learn all about React</MoPageHeader>
          <ListItem>
            <ListItemAvatar className={classes.checkMark}>
              <CheckIcon />
            </ListItemAvatar>
            <ListItemText primary="Basic HTML and usage in React" />
          </ListItem>
          <ListItem>
            <ListItemAvatar className={classes.checkMark}>
              <CheckIcon />
            </ListItemAvatar>
            <ListItemText primary="Styling components and elements in React" />
          </ListItem>
          <ListItem>
            <ListItemAvatar className={classes.checkMark}>
              <CheckIcon />
            </ListItemAvatar>
            <ListItemText primary="JavaScript functionality in React" />
          </ListItem>
          <ListItem>
            <ListItemAvatar className={classes.checkMark}>
              <CheckIcon />
            </ListItemAvatar>
            <ListItemText primary="React Hooks, Context API, and Redux" />
          </ListItem>
          <ListItem>
            <ListItemAvatar className={classes.checkMark}>
              <CheckIcon />
            </ListItemAvatar>
            <ListItemText primary="Best UI/UX practices" />
          </ListItem>
          <ListItem>
            <ListItemAvatar className={classes.checkMark}>
              <CheckIcon />
            </ListItemAvatar>
            <MoLink text="View All Courses" href={ROUTES.COLLECTIONS.path} />
          </ListItem>
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
          <video autoPlay muted loop style={{ width: "100%" }}>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/landing%2Fmoskool_courses.mp4?alt=media&token=36c246b3-8004-4de5-8005-35e3474472bc"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.container}>
        <Grid item sm={12} md={6} xs={12}>
          <MoPageHeader>Try the playground</MoPageHeader>
          <MoPageSubtitle margin="36px 0 36px">
            Write code in JSX and watch it render your code magically.
          </MoPageSubtitle>
          <MoLinkButton
            text="Try the playground"
            href={ROUTES.PLAYGROUND.path}
          />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default withStyles(styles)(LandingPage);
