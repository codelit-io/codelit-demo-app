import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { compose } from 'recompose';
import facebook from 'assets/facebook.svg';
import PropTypes from 'prop-types';
import { withFirebase } from 'components/shared/Firebase';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  button: {
    width: '100%',
    textAlign: 'center',
    textTransform: 'initial',
    justifyContent: 'end',
    paddingLeft: '1em',
  },
  form: {
    marginTop: theme.spacing(4),
  },
});

const SignInWithFacebookBase = ({ firebase, history, classes }) => {
  const [error, setError] = useState(null);
  const onSubmit = event => {
    firebase.signInWithFacebook().then(socialAuthUser => {
      // Create a user in your Firebase Realtime Database too
      return firebase
        .user(socialAuthUser.user.uid)
        .set(
          {
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email || 'none',
            roles: {},
          },
          { merge: true },
        )
        .then(() => {
          setError(null);
        })
        .catch(error => setError(error));
    });
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <Button
        aria-label="Login with Facebook"
        className={classes.button}
        startIcon={<img src={facebook} alt="facebook logo" />}
        type="submit">
        Sign in with Facebook
      </Button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

SignInWithFacebookBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SignInWithFacebook = compose(
  withStyles(styles),
  withFirebase,
)(SignInWithFacebookBase);

export default SignInWithFacebook;
