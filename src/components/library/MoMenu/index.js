import React, { useState } from 'react';

import * as ROUTES from 'constants/routes';
import AppsIcon from '@material-ui/icons/Apps';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Slide from '@material-ui/core/Slide';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './styles';

const MoMenu = ({ authUser, classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Your Courses" arrow>
        <IconButton
          aria-label="View Collections Menu"
          aria-controls="collections-menu"
          aria-haspopup="true"
          onClick={handleClick}>
          <AppsIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        elevation={2}
        getContentAnchorEl={null}
        id="collections-menu"
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        TransitionComponent={Slide}>
        <div>
          <MenuItem
            to={ROUTES.EASY_COLLECTIONS.path}
            component={Link}
            onClick={handleClose}>
            {ROUTES.EASY_COLLECTIONS.title}
          </MenuItem>
          <MenuItem
            to={ROUTES.MEDIUM_COLLECTIONS.path}
            component={Link}
            onClick={handleClose}>
            {ROUTES.MEDIUM_COLLECTIONS.title}
          </MenuItem>
          <MenuItem
            to={ROUTES.PRO_COLLECTIONS.path}
            component={Link}
            onClick={handleClose}>
            {ROUTES.PRO_COLLECTIONS.title}
          </MenuItem>
          <Divider variant="middle" />
          <MenuItem
            to={ROUTES.COLLECTIONS.path}
            component={Link}
            onClick={handleClose}>
            Your Courses
          </MenuItem>
        </div>
      </Menu>
    </>
  );
};

export default withStyles(styles)(MoMenu);
