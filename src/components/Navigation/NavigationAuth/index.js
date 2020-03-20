import React from "react";
import * as ROUTES from "../../../constants/routes";
import * as ROLES from "../../../constants/roles";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import SignOutButton from "../../SignOut";

const NavigationAuth = ({ authUser, handleClose }) => (
  <div>
    <MenuItem to={ROUTES.ACCOUNT.path} component={Link} onClick={handleClose}>
      My account
    </MenuItem>
    <MenuItem to={ROUTES.HOME.path} component={Link} onClick={handleClose}>
      Feature Request
    </MenuItem>
    <MenuItem to={ROUTES.ACCOUNT.path} component={Link} onClick={handleClose}>
      My Account
    </MenuItem>
    {authUser.roles && !!authUser.roles[ROLES.ADMIN] && (
      <MenuItem to={ROUTES.ADMIN.path} component={Link} onClick={handleClose}>
        Admin
      </MenuItem>
    )}
    <SignOutButton handleClose={handleClose}></SignOutButton>
  </div>
);

export default NavigationAuth;
