import React from "react";

import * as ROUTES from "../../constants/routes";
import CheckIcon from "@material-ui/icons/Check";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import MoLinkButton from "../../components/shared/MoLinkButton";

const LandingPage = ({ classes }) => {
  return (
    <>
      <Grid container spacing={4} className={classes.container}>
        <Grid item sm={12} md={6} xs={12}>
          <Typography variant="h1" component="h2" className={classes.heroText}>
            Master React without the fees
          </Typography>
          <Typography className={classes.heroSubtitle}>
            Experience a modern interactive approach to mastering React frontend
            development.
          </Typography>
          <MoLinkButton text="Get started" href={ROUTES.QUESTIONS.path} />
        </Grid>

        <Grid item sm={12} md={6} xs={12}>
          <Slide
            direction="up"
            in={classes && true}
            timeout={{ enter: 400, exit: 400 }}
          >
            <img
              alt="Congrats"
              className={classes.img}
              src="https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/landing%2Fcongrats.png?alt=media&token=6e591903-a43c-413a-b861-52982750e530"
            />
          </Slide>
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.container}>
        <Grid item sm={12} md={6} xs={12}>
          <Typography
            variant="h1"
            component="h2"
            className={classes.heroText}
            gutterBottom
          >
            Learn All About React
          </Typography>
          <ListItem>
            <ListItemAvatar className={classes.checkMark}>
              <CheckIcon />
            </ListItemAvatar>
            <ListItemText
              primary="Presentational HTML"
              secondary="HTML and CSS in JS"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar className={classes.checkMark}>
              <CheckIcon />
            </ListItemAvatar>
            <ListItemText
              primary="Styling HTML Elements"
              secondary="CSS in JS"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar className={classes.checkMark}>
              <CheckIcon />
            </ListItemAvatar>
            <ListItemText
              primary="JavaScript Functionality"
              secondary="JavaScript"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar className={classes.checkMark}>
              <CheckIcon />
            </ListItemAvatar>
            <ListItemText primary="React Components" secondary="JSX" />
          </ListItem>
        </Grid>

        <Grid item sm={12} md={6} xs={12}>
          <Slide
            direction="up"
            in={classes && true}
            timeout={{ enter: 400, exit: 400 }}
          >
            <img
              alt="Congrats"
              className={classes.img}
              src="https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/landing%2Frocket-learn.png?alt=media&token=2a3a0cc9-21bd-4119-865f-f5bb920ce939"
            />
          </Slide>
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.container}>
        <Grid item sm={12} md={6} xs={12}>
          <Typography
            variant="h1"
            component="h2"
            className={classes.heroText}
            gutterBottom
          >
            Try the playground
          </Typography>
          <Typography className={classes.heroSubtitle}>
            Write code in JSX and it will render your code magically.
          </Typography>
          <MoLinkButton
            text="Try the playground"
            href={ROUTES.PLAYGROUND.path}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(LandingPage);
