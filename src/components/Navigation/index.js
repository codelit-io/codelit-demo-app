import React from "react";

import { AuthUserContext } from "../Session";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import MoAvatar from "./MoAvatar";
import MoMenu from "./MoMenu";
import MoSkoolLogo from "../MoSkoolLogo";
import styles from "./styles";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";

const Navigation = ({ classes }) => {
  return (
    <header className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.alignCenter}>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <MoSkoolLogo />
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              style={{ textAlign: "right" }}
            >
              <AuthUserContext.Consumer>
                {authUser => (
                  <>
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

export default withStyles(styles)(Navigation);
