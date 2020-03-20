import React from "react";
import * as ROUTES from "../../../constants/routes";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

const NavigationNonAuth = ({ handleClose }) => (
  <div>
    <MenuItem to={ROUTES.SIGN_IN.path} component={Link} onClick={handleClose}>
      Sign in
    </MenuItem>
    <MenuItem to={ROUTES.SIGN_UP.path} component={Link} onClick={handleClose}>
      Sign up
    </MenuItem>
  </div>
);

export default NavigationNonAuth;
