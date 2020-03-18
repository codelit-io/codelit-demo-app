import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import PropTypes from "prop-types";
import { withFirebase } from "../../Firebase";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    margin: theme.spacing(1)
  }
});

const SignInWithGoogleBase = ({ firebase, classes, history }) => {
  const [error, setError] = useState({ error: null });
  const onSubmit = event => {
    firebase
      .signInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in Firebase Realtime Database
        return firebase.user(socialAuthUser.user.uid).set(
          {
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: {}
          },
          { merge: true }
        );
      })
      .then(() => {
        setError(null);
        // Investigate if this this the correct approach
        history.goBack();
      })
      .catch(error => setError(error));
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        type="submit"
      >
        {" "}
        SIgn In with Google
      </Button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

SignInWithGoogleBase.propTypes = {
  classes: PropTypes.object.isRequired
};

const SignInWithGoogle = compose(
  withStyles(styles),
  withRouter,
  withFirebase
)(SignInWithGoogleBase);

export default SignInWithGoogle;
