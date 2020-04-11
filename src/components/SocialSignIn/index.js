import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import styles from "./styles";
import SignInWithFacebook from "./SignInWithFacebook";
import SignInWithGoogle from "./SignInWithGoogle";
import MoTitle from "../shared/MoTitle";

const SocialSignIn = ({ classes }) => {
  return (
    <div className={classes.card}>
      <main className={classes.main}>
        <CssBaseline />
        <div className={classes.paper}>
          <MoTitle
            text="1-click Signup"
            fade={true}
            margin="36px 0 36px"
          />
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
