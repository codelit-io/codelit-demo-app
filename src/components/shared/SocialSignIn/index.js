import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import styles from "./styles";
import SignInWithFacebook from "./SignInWithFacebook";
import SignInWithGoogle from "./SignInWithGoogle";
import MoTypography from "components/library/MoTypography";
import { SIGN_UP } from "constants/i18n";

const SocialSignIn = ({ classes }) => {
  return (
    <div className={classes.card}>
      <main className={classes.main}>
        <CssBaseline />
        <div className={classes.paper}>
          <MoTypography font="breeSerif" marginBottom="md" variant="h4">
            {SIGN_UP.ONE_CLICK_SIGNUP}
          </MoTypography>
          <SignInWithFacebook />
          <SignInWithGoogle />
        </div>
      </main>
    </div>
  );
};

SocialSignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialSignIn);
