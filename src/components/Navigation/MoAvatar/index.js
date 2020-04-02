import React, { useState } from "react";

import * as ROUTES from "../../../constants/routes";
import * as ROLES from "../../../constants/roles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SignOutButton from "../../SignOut";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import withStyles from "@material-ui/core/styles/withStyles";
import SignInWithFacebook from "../../SocialSignIn/SignInWithFacebook";
import SignInWithGoogle from "../../SocialSignIn/SignInWithGoogle";
import Tooltip from '@material-ui/core/Tooltip';

const MoAvatar = ({ authUser, classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
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
          className={`${classes.avatar} ${authUser?.roles?.ADMIN &&
            classes.adminAvatar}
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
          horizontal: "center"
        }}
        elevation={2}
        getContentAnchorEl={null}
        id="avatar-menu"
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        TransitionComponent={Slide}
      >
        {authUser ? (
          <div>
            <MenuItem
              to={ROUTES.HOME.path}
              component={Link}
              onClick={handleClose}
            >
              Feature Request
            </MenuItem>
            <MenuItem
              to={ROUTES.ACCOUNT.path}
              component={Link}
              onClick={handleClose}
            >
              My Account
            </MenuItem>
            {authUser.roles && !!authUser.roles[ROLES.ADMIN] && (
              <MenuItem
                to={ROUTES.ADMIN.path}
                component={Link}
                onClick={handleClose}
              >
                Admin
              </MenuItem>
            )}
            <SignOutButton handleClose={handleClose}></SignOutButton>
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
              Email Login
            </MenuItem>
            <MenuItem
              to={ROUTES.SIGN_UP.path}
              component={Link}
              onClick={handleClose}
            >
              Email Sign Up
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
};

export default withStyles(styles)(MoAvatar);
