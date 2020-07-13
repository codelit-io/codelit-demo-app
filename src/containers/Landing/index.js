/**
 *
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Landing Page 🥇
 *
 *
 * Main page in the app
 *
 */

import React from "react";

import * as ROUTES from "constants/routes";

import { LANDING_PAGE } from "constants/i18n";
import CheckIcon from "@material-ui/icons/Check";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Landing1 from "assets/landing1.png";
import Landing2 from "assets/landing2.png";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import MoButton from "components/library/MoButton";
import withStyles from "@material-ui/core/styles/withStyles";
import Footer from "components/shared/Footer";
import styles from "./styles";
import MoTypography from "components/library/MoTypography";

const LandingPage = ({ classes }) => {
  return (
    <>
      <Grid container spacing={4} className={classes.container}>
        <Grid item sm={12} md={6} xs={12}>
          <Fade
            in={Landing1 && true}
            mountOnEnter
            timeout={{ enter: 200 }}
            unmountOnExit
          >
            <div className={classes.responsiveGrid}>
              <MoTypography
                color="greyDark"
                font="breeSerif"
                marginBottom="md"
                variant="h2"
              >
                {LANDING_PAGE.HERO_TITLE}
              </MoTypography>
              <MoTypography
                color="grey"
                font="openSans"
                marginBottom="md"
                variant="h4"
              >
                {LANDING_PAGE.HERO_SUBTITLE}
              </MoTypography>
              <MoButton
                isArrowIcon={true}
                color="primary"
                variant="contained"
                size="large"
                text={LANDING_PAGE.VIEW_COURSES}
                href={ROUTES.COLLECTIONS.path}
              />
            </div>
          </Fade>
        </Grid>

        <Grid item sm={12} md={6} xs={12}>
          <Fade
            in={Landing1 && true}
            mountOnEnter
            timeout={{ enter: 1200 }}
            unmountOnExit
          >
            <img
              alt={LANDING_PAGE.LEARN_COURSES}
              src={Landing1}
              className={classes.img}
            />
          </Fade>
        </Grid>
      </Grid>

      <Grid container spacing={4} className={classes.container}>
        <Fade
          in={Landing2 && true}
          mountOnEnter
          timeout={{ enter: 1200 }}
          unmountOnExit
        >
          <Grid item sm={12} md={6} xs={12}>
            <MoTypography
              color="greyDark"
              font="breeSerif"
              marginBottom="md"
              variant="h2"
            >
              Learn all about React
            </MoTypography>
            <ListItem>
              <ListItemAvatar className={classes.checkMark}>
                <CheckIcon />
              </ListItemAvatar>
              <MoButton
                isArrowIcon={false}
                color="primary"
                variant="text"
                size="large"
                text={LANDING_PAGE.HTML}
                href={ROUTES.COLLECTIONS.path + "/#html"}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar className={classes.checkMark}>
                <CheckIcon />
              </ListItemAvatar>
              <MoButton
                isArrowIcon={false}
                color="primary"
                variant="text"
                size="large"
                text={LANDING_PAGE.STYLING}
                href={ROUTES.COLLECTIONS.path + "/#reactStyle"}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar className={classes.checkMark}>
                <CheckIcon />
              </ListItemAvatar>
              <MoButton
                isArrowIcon={false}
                color="primary"
                variant="text"
                size="large"
                text={LANDING_PAGE.JS}
                href={ROUTES.COLLECTIONS.path + "/#js"}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar className={classes.checkMark}>
                <CheckIcon />
              </ListItemAvatar>
              <MoButton
                isArrowIcon={false}
                color="primary"
                variant="text"
                size="large"
                text={LANDING_PAGE.ADVANCED}
                href={ROUTES.COLLECTIONS.path + "/#reactJsx"}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar className={classes.checkMark}>
                <CheckIcon />
              </ListItemAvatar>
              <MoButton
                isArrowIcon={false}
                color="primary"
                variant="text"
                size="large"
                text={LANDING_PAGE.VIEW_ALL_COURSES}
                href={ROUTES.COLLECTIONS.path}
              />
            </ListItem>
          </Grid>
        </Fade>
        <Fade
          in={Landing1 && true}
          mountOnEnter
          timeout={{ enter: 400 }}
          unmountOnExit
        >
          <Grid item sm={12} md={6} xs={12}>
            <img
              alt={LANDING_PAGE.LEARN_ALL_ABOUT_REACT}
              src={Landing2}
              className={classes.img}
            />
          </Grid>
        </Fade>
      </Grid>
      <Grid container spacing={4} className={classes.container}>
        <Grid item sm={12} md={6} xs={12}>
          <MoTypography
            color="greyDark"
            font="breeSerif"
            marginBottom="md"
            variant="h2"
          >
            Try the playground
          </MoTypography>
          <MoTypography
            color="grey"
            font="openSans"
            marginBottom="md"
            variant="h4"
          >
            {LANDING_PAGE.PLAYGROUND_SUBTITLE}
          </MoTypography>
          <MoButton
            isArrowIcon={true}
            color="primary"
            variant="contained"
            size="large"
            text={LANDING_PAGE.TRY_THE_PLAYGROUND}
            href={ROUTES.PLAYGROUND.path}
          />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default withStyles(styles)(LandingPage);
