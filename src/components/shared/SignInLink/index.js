import React from "react";

import * as ROUTES from "constants/routes";
import { Link } from "react-router-dom";

const SignInLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_IN.path}>Sign In</Link>
  </p>
);

export default SignInLink;
