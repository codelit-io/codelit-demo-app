/**
 * Navigation Component
 *
 * Navigation bar for the hole app
 *
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
 * @param {Class} firebase - Firebase class provides access to authUser and db
 * @return {<form></form>}
 */

/* TODO: Make this component shareable and generic! */
import React, { lazy } from "react";

import * as ROUTES from "constants/routes";
import { Link } from "react-router-dom";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import useUserRole from "hooks/useUserRole";
import ThemeSwitch from "./ThemeSwitch";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useGlobal from "store";

const AppsIcon = lazy(() => import("@material-ui/icons/Apps"));
const Button = lazy(() => import("@material-ui/core/Button"));
const Grid = lazy(() => import("@material-ui/core/Grid"));
const MoAvatar = lazy(() => import("components/library/MoAvatar"));
const Toolbar = lazy(() => import("@material-ui/core/Toolbar"));
const AppBar = lazy(() => import("@material-ui/core/AppBar"));
const MoSkoolLogo = lazy(() => import("components/library/MoSkoolLogo"));

const Navigation = ({ Breadcrumbs, classes }) => {
  const [authUser, addToAuthUser] = useGlobal(
    state => state.authUser,
    actions => actions.addToAuthUser
  );

  const [firebase, addToFirebase] = useGlobal(
    state => state.firebaseCache,
    actions => actions.addToFirebase
  );

  const userRole = useUserRole(authUser);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <header className={classes.root}>
      <AppBar
        position="static"
        color="transparent"
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar disableGutters={true} variant="dense">
          <Grid container alignItems="center">
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <div className={classes.leftSide}>
                <MoSkoolLogo />
                {Breadcrumbs && !isMobile && <Breadcrumbs />}
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
              style={{ textAlign: "right" }}
            >
              <Button
                color="primary"
                className={classes.button}
                aria-label="Courses"
                aria-haspopup="true"
                startIcon={<AppsIcon />}
                component={Link}
                to={ROUTES.COLLECTIONS.path}
              >
                {!isMobile && "Courses"}
              </Button>
              <>
                <ThemeSwitch />
                <MoAvatar
                  authUser={authUser}
                  addToAuthUser={() => addToAuthUser}
                  addToFirebase={() => addToFirebase}
                  isAdmin={userRole.isAdmin}
                  firebase={firebase}
                />
              </>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default withStyles(styles)(Navigation);
