import React, { useState } from "react";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Menu from "@material-ui/core/Menu";
import NavigationAuth from "./NavigationAuth";
import NavigationNonAuth from "./NavigationNonAuth";

const Navigation = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.alignCenter}>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Typography className={classes.title} variant="h6" noWrap>
                <Link
                  to={ROUTES.LANDING.path}
                  style={{ color: "#383c40", textDecoration: "none" }}
                >
                  <Box fontWeight="fontWeightLight" className={classes.MoSkool}>
                    Mo Skool
                  </Box>
                </Link>
              </Typography>
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
                    <Button
                      aria-controls="avatar-menu"
                      aria-haspopup="true"
                      className={classes.avatarButton}
                      onClick={handleClick}
                    >
                      <Avatar
                        alt="Me"
                        src={authUser && authUser.photoURL}
                        className={`${classes.avatar} ${authUser &&
                          authUser.roles &&
                          authUser.roles.ADMIN &&
                          classes.adminAvatar}`}
                      />
                    </Button>
                    <Menu
                      id="avatar-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {authUser ? (
                        <NavigationAuth
                          authUser={authUser}
                          handleClose={handleClose}
                        />
                      ) : (
                        <NavigationNonAuth handleClose={handleClose} />
                      )}
                    </Menu>
                  </>
                )}
              </AuthUserContext.Consumer>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navigation);
