import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import google from "../../../assets/google.svg";
import PropTypes from "prop-types";
import { withFirebase } from "../../Firebase";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  button: {
    width: "100%",
    textAlign: "center",
    textTransform: "initial",
    justifyContent: "end",
    paddingLeft: "1em",
  },
});

const SignInWithGoogleBase = ({ firebase, classes }) => {
  const [error, setError] = useState({ error: null });
  const onSubmit = (event) => {
    firebase
      .signInWithGoogle()
      .then((socialAuthUser) => {
        // Create a user in Firebase Realtime Database
        return firebase.user(socialAuthUser.user.uid).set(
          {
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: {},
          },
          { merge: true }
        );
      })
      .then(() => {
        setError(null);
      })
      .catch((error) => setError(error));
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <Button
        aria-label="Login with Google"
        className={classes.button}
        startIcon={<img src={google} alt="google logo" />}
        type="submit"
      >
        Sign in with Google
      </Button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

SignInWithGoogleBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SignInWithGoogle = compose(
  withStyles(styles),
  withFirebase
)(SignInWithGoogleBase);

export default SignInWithGoogle;
