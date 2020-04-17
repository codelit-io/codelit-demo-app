import React, { useState, lazy, Suspense } from "react";

import * as ROUTES from "../../constants/routes";

import CheckIcon from "@material-ui/icons/Check";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import MoBrowserMockup from "../../components/shared/MoBrowserMockup";
import MoLinkButton from "../../components/shared/MoLinkButton";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const Footer = lazy(() => import("../../components/Footer"));
const Typist = lazy(() => import("react-typist"));

const LandingPage = ({ classes }) => {
  const [isPreview, setIsPreview] = useState(false);
  return (
    <>
      <Grid container spacing={4} className={classes.container}>
        <Grid item sm={12} md={6} xs={12}>
          <Fade in={true} mountOnEnter timeout={{ enter: 800 }} unmountOnExit>
            <div className={classes.responsiveGrid}>
              <Typography
                variant="h1"
                component="h2"
                className={classes.heroText}
              >
                Master React without the fees
              </Typography>

              <Typography className={classes.heroSubtitle}>
                Experience a modern interactive approach to mastering React
                frontend development.
              </Typography>

              <MoLinkButton
                text="Get started"
                href={ROUTES.EASY_COLLECTIONS.path}
              />
            </div>
          </Fade>
        </Grid>

        <Grid item sm={12} md={6} xs={12}>
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            style={{ width: "100%", marginBottom: "50px" }}
          >
            <Fade in={true} mountOnEnter timeout={{ enter: 800 }} unmountOnExit>
              <div>
                <Typography variant="body1" gutterBottom>
                  Write your code
                </Typography>
                <MoBrowserMockup fileType="jsx" isEditor={true}>
                  <pre className={classes.editorFont}>
                    <Suspense>
                      <Typist
                        avgTypingDelay={60}
                        stdTypingDelay={30}
                        startDelay={100}
                        cursor={{
                          show: true,
                          blink: true,
                          element: "|",
                          hideWhenDone: true,
                        }}
                        onTypingDone={() => setIsPreview(true)}
                      >
                        <span style={{ color: "#4d4d4c" }}>() =></span>{" "}
                        <span style={{ color: "#c82829" }}>&lt;h1&gt;</span>
                        <span style={{ color: "#4d4d4c" }}>Hello React</span>
                        <span
                          aria-label="img"
                          role="img"
                          className={classes.emoji}
                        >
                          🤩
                        </span>
                        <span style={{ color: "#c82829" }}>&lt;/h1&gt;</span>
                      </Typist>
                    </Suspense>
                  </pre>
                </MoBrowserMockup>
              </div>
            </Fade>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Fade in={true} mountOnEnter timeout={{ enter: 800 }} unmountOnExit>
              <div>
                <Typography variant="body1" gutterBottom>
                  Preview in real-time
                </Typography>
                <MoBrowserMockup isBrowser={true}>
                  <Fade
                    in={isPreview}
                    mountOnEnter
                    timeout={{ enter: 600 }}
                    unmountOnExit
                  >
                    <h1 style={{ height: "46px" }}>
                      Hello React
                      <span
                        aria-label="img"
                        role="img"
                        className={classes.emoji}
                      >
                        🤩
                      </span>
                    </h1>
                  </Fade>
                </MoBrowserMockup>
              </div>
            </Fade>
          </Grid>
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
          <img
            alt="Congrats"
            className={classes.img}
            src="https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/landing%2Fcongrats.png?alt=media&token=6e591903-a43c-413a-b861-52982750e530"
          />
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
      <Footer />
    </>
  );
};

export default withStyles(styles)(LandingPage);
