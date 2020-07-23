/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Sign up Card Item
 *
 * Renders a sign up card
 *
 * @param {Boolean} isActive - show or hide component
 * @returns {<MoTypography/>} - returns Typography component a formatted text
 *
 * @see See [React hoc](https://reactjs.org/docs/higher-order-components.html)
 * */

import React from "react";

import * as ROUTES from "constants/routes";

// MUI components
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import LockOpenIcon from "@material-ui/icons/LockOpen";

// Mo Skool components
import MoCard from "components/library/MoCard";

import { SIGN_UP } from "constants/i18n";

const SignUpCard = ({ isActive, type }) => {
  if (!isActive) {
    return null;
  }
  return (
    <Grow in={isActive} mountOnEnter timeout={{ enter: 200 }} unmountOnExit>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <MoCard
          IconComponent={LockOpenIcon}
          isDisabled={false}
          subtitle={SIGN_UP.SIGN_UP_TO_EARN_REWARDS}
          title={SIGN_UP.CORE}
          type={type}
          url={ROUTES.SIGN_UP.path}
        />
      </Grid>
    </Grow>
  );
};

export default SignUpCard;
