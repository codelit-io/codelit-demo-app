/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Sign up Card Item
 *
 * Renders a sign up card
 *
 * @returns {<MoTypography/>} - returns Typography component a formatted text
 *
 * @see See [React hoc](https://reactjs.org/docs/higher-order-components.html)
 * */

import React from "react";

import * as ROUTES from "constants/routes";

// MUI components
import LockOpenIcon from "@material-ui/icons/LockOpen";

// Mo Skool components
import MoCard from "components/library/MoCard";

import { SIGN_UP } from "constants/i18n";

const SignUpCard = () => {
  return (
    <MoCard
      IconComponent={LockOpenIcon}
      isDisabled={false}
      subtitle={SIGN_UP.SIGN_UP_TO_EARN_REWARDS}
      title={SIGN_UP.CORE}
      type="signup"
      url={ROUTES.SIGN_UP.path}
    />
  );
};

export default SignUpCard;
