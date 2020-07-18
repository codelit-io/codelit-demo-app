import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import styles from "./styles";
import SignInWithFacebook from "./SignInWithFacebook";
import SignInWithGoogle from "./SignInWithGoogle";
import MoTypography from "components/library/MoTypography";
import { SIGN_UP } from "constants/i18n";

const SocialSignIn = ({ classes }) => {
  return (
    <Paper className={classes.card}>
      <main className={classes.main}>
        <div className={classes.paper}>
          <MoTypography font="breeSerif" marginBottom="md" variant="h4">
            {SIGN_UP.ONE_CLICK_SIGNUP}
          </MoTypography>
          <SignInWithFacebook />
          <SignInWithGoogle />
        </div>
      </main>
    </Paper>
  );
};

SocialSignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialSignIn);
