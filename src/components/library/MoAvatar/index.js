import React, { useState } from "react";

import * as ROUTES from "constants/routes";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LockIcon from "@material-ui/icons/Lock";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "./styles";
import Grow from "@material-ui/core/Grow";
import withStyles from "@material-ui/core/styles/withStyles";
import SignInWithFacebook from "components/shared/SocialSignIn/SignInWithFacebook";
import SignInWithGoogle from "components/shared/SocialSignIn/SignInWithGoogle";
import SportsMotorsportsIcon from "@material-ui/icons/SportsMotorsports";
import Tooltip from "@material-ui/core/Tooltip";
import FeedbackIcon from "@material-ui/icons/Feedback";

const MoAvatar = ({ actions, authUser, isAdmin, classes, firebase }) => {
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
        <IconButton
          aria-controls="avatar-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Avatar
            alt="Me"
            src={authUser && authUser.photoURL}
            className={`${classes.avatar} ${isAdmin && classes.adminAvatar}
            ${isAdmin && classes.authorAvatar}`}
            aria-controls="avatar-menu"
            aria-haspopup="true"
            size="24"
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        elevation={3}
        getContentAnchorEl={null}
        id="avatar-menu"
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        TransitionComponent={Grow}
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
            <MenuItem
              href={ROUTES.SUBMIT_ISSUE_GITHUB.path}
              component={"a"}
              onClick={handleClose}
            >
              <ListItemIcon>
                <FeedbackIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={ROUTES.SUBMIT_ISSUE_GITHUB.title} />
            </MenuItem>
            {isAdmin && (
              <MenuItem
                to={ROUTES.ADMIN_COURSES.path}
                component={Link}
                onClick={handleClose}
              >
                <ListItemIcon>
                  <SportsMotorsportsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={ROUTES.ADMIN.title} />
              </MenuItem>
            )}
            <MenuItem
              button
              onClick={() => {
                firebase.signOut();
                handleClose();
                actions.addToState(null);
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
