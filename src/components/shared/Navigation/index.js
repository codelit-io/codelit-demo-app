/**
 * Navigation Component
 *
 * Navigation bar for the hole app
 *
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
 * @param {Class} firebase - Firebase class provides access to authUser and db
 * @param {Class} history - Firebase class provides access to authUser and db
 * @return {<form></form>}
 */

import React, { lazy } from "react";

import * as ROUTES from "constants/routes";
import { compose } from "recompose";
import { Link, withRouter } from "react-router-dom";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import { withAuthentication } from "../Session";
import useUserRole from "hooks/useUserRole";
import AppBar from "@material-ui/core/AppBar";
import ThemeSwitch from "./ThemeSwitch";

const AppsIcon = lazy(() => import("@material-ui/icons/Apps"));
const Button = lazy(() => import("@material-ui/core/Button"));
const Container = lazy(() => import("@material-ui/core/Container"));
const Grid = lazy(() => import("@material-ui/core/Grid"));
const MoAvatar = lazy(() => import("components/library/MoAvatar"));
const Toolbar = lazy(() => import("@material-ui/core/Toolbar"));
const MoSkoolLogo = lazy(() => import("components/library/MoSkoolLogo"));
const NewCourseDialog = lazy(() => import("./NewCourseDialog"));

const Navigation = ({ authUser, classes, firebase, history }) => {
  const userRole = useUserRole(authUser);
  return (
    <header className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Toolbar disableGutters={true}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <MoSkoolLogo />
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                md={9}
                lg={9}
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
                  Courses
                </Button>
                <>
                  {history.location.pathname === ROUTES.ADMIN_COURSES.path &&
                    userRole.isAdmin && (
                      <NewCourseDialog
                        authUser={authUser}
                        firebase={firebase}
                      />
                    )}
                  <ThemeSwitch />
                  <MoAvatar
                    authUser={authUser}
                    isAdmin={userRole.isAdmin}
                    firebase={firebase}
                  />
                </>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default compose(
  withStyles(styles),
  withAuthentication,
  withRouter
)(Navigation);
