import React, { useState } from "react";

import * as ROUTES from "constants/routes";
import * as ROLES from "constants/roles";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LockIcon from "@material-ui/icons/Lock";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import withStyles from "@material-ui/core/styles/withStyles";
import SignInWithFacebook from "components/shared/SocialSignIn/SignInWithFacebook";
import SignInWithGoogle from "components/shared/SocialSignIn/SignInWithGoogle";
import SportsMotorsportsIcon from "@material-ui/icons/SportsMotorsports";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Tooltip from "@material-ui/core/Tooltip";

const MoAvatar = ({ authUser, classes, firebase }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Menu" arrow>
        <Button
          aria-controls="avatar-menu"
          aria-haspopup="true"
          className={classes.avatarButton}
          onClick={handleClick}
        >
          <Avatar
            alt="Me"
            src={authUser && authUser.photoURL}
            className={`${classes.avatar} ${
              authUser?.roles?.ADMIN && classes.adminAvatar
            }
            ${authUser?.roles?.AUTHOR && classes.authorAvatar}`}
            aria-controls="avatar-menu"
            aria-haspopup="true"
          />
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        elevation={2}
        getContentAnchorEl={null}
        id="avatar-menu"
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Slide}
      >
        {authUser ? (
          <div>
            <MenuItem
              to={ROUTES.ACCOUNT.path}
              component={Link}
              onClick={handleClose}
            >
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={ROUTES.ACCOUNT.title} />
            </MenuItem>
            <MenuItem
              to={ROUTES.COLLECTIONS.path}
              component={Link}
              onClick={handleClose}
            >
              <ListItemIcon>
                <AppsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={ROUTES.COLLECTIONS.title} />
            </MenuItem>
            {authUser.roles && !!authUser.roles[ROLES.ADMIN] && (
              <>
                <MenuItem
                  to={ROUTES.ADMIN.path}
                  component={Link}
                  onClick={handleClose}
                >
                  <ListItemIcon>
                    <SportsMotorsportsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={ROUTES.ADMIN.title} />
                </MenuItem>
                <MenuItem
                  to={ROUTES.HOME.path}
                  component={Link}
                  onClick={handleClose}
                >
                  <ListItemIcon>
                    <TrendingUpIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={ROUTES.HOME.title} />
                </MenuItem>
              </>
            )}
            <MenuItem
              button
              onClick={() => {
                firebase.signOut();
                handleClose();
              }}
            >
              <ListItemIcon>
                <LockIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Sign out" />
            </MenuItem>
          </div>
        ) : (
          <div>
            <SignInWithFacebook />
            <SignInWithGoogle />
            <MenuItem
              to={ROUTES.SIGN_IN.path}
              component={Link}
              onClick={handleClose}
            >
              {ROUTES.SIGN_IN.title}
            </MenuItem>
            <MenuItem
              to={ROUTES.SIGN_UP.path}
              component={Link}
              onClick={handleClose}
            >
              {ROUTES.SIGN_UP.title}
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
};

export default withStyles(styles)(MoAvatar);
