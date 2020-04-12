import React from "react";

import { AuthUserContext } from "../Session";
import AddCourse from "./AddCourse";
import AppBar from "@material-ui/core/AppBar";
import { compose } from "recompose";
import Grid from "@material-ui/core/Grid";
import MoAvatar from "../shared/MoAvatar";
import MoMenu from "../shared/MoMenu";
import MoSkoolLogo from "../MoSkoolLogo";
import styles from "./styles";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";

const Navigation = ({ classes, firebase, history, match }) => {
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
              <AuthUserContext.Consumer>
                {authUser => (
                  <>
                    {authUser && (
                      <AddCourse
                        authUser={authUser}
                        firebase={firebase}
                        history={history}
                        match={match}
                      />
                    )}
                    <MoMenu authUser={authUser} />
                    <MoAvatar authUser={authUser} />
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
