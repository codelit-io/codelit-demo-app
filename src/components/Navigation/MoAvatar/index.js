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
import withStyles from "@material-ui/core/styles/withStyles";

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
          <div>
            <MenuItem
              to={ROUTES.ACCOUNT.path}
              component={Link}
              onClick={handleClose}
            >
              My account
            </MenuItem>
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
            <MenuItem
              to={ROUTES.SIGN_IN.path}
              component={Link}
              onClick={handleClose}
            >
              Sign in
            </MenuItem>
            <MenuItem
              to={ROUTES.SIGN_UP.path}
              component={Link}
              onClick={handleClose}
            >
              Sign up
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
};

export default withStyles(styles)(MoAvatar);
