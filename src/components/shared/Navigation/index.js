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

import React from "react";

import * as ROLES from "constants/roles";
import * as ROUTES from "constants/routes";
import AppsIcon from "@material-ui/icons/Apps";
import { AuthUserContext } from "../Session";
import NewCourseDialog from "./NewCourseDialog";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import MoAvatar from "components/library/MoAvatar";
import MoSkoolLogo from "../../library/MoSkoolLogo";
import styles from "./styles";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";

const Navigation = ({ classes, firebase, history }) => {
  return (
    <header className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.alignCenter}>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <MoSkoolLogo />
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
                Courses
              </Button>
              <AuthUserContext.Consumer>
                {(authUser) => (
                  <>
                    {history.location.pathname === ROUTES.COLLECTIONS.path &&
                      authUser &&
                      authUser.roles &&
                      !!authUser.roles[ROLES?.ADMIN] && (
                        <NewCourseDialog
                          authUser={authUser}
                          firebase={firebase}
                        />
                      )}
                    <MoAvatar authUser={authUser} firebase={firebase} />
                  </>
                )}
              </AuthUserContext.Consumer>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default compose(withStyles(styles), withRouter)(Navigation);
