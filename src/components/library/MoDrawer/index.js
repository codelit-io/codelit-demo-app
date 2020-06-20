import React, { useState } from "react";
import { AuthUserContext } from "components/shared/Session";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import withStyles from "@material-ui/core/styles/withStyles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  }
});

const MoDrawer = classes => {
  const [state, setState] = useState({
    isDrawerOpen: false
  });

  const toggleDrawer = isDrawerOpen => {
    setState({ ...state, isDrawerOpen });
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={state.isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? (
              <div
                onClick={() => toggleDrawer(false)}
                onKeyDown={() => toggleDrawer(false)}
              >
                <h1>NavigationAuth</h1>
              </div>
            ) : (
              <div
                onClick={() => toggleDrawer(false)}
                onKeyDown={() => toggleDrawer(false)}
              >
                <h1>NavigationNonAuth</h1>
              </div>
            )
          }
        </AuthUserContext.Consumer>
      </SwipeableDrawer>
    </>
  );
};

export default withStyles(styles)(MoDrawer);
