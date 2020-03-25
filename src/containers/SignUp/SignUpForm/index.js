import React, { useState } from "react";

import * as ROLES from "../../../constants/roles";

import { compose } from "recompose";
import EmailSignUpForm from "../../../components/EmailSignUpForm";
import { withFirebase } from "../../../components/Firebase";
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

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  isAdmin: false,
  error: null
};

const ERROR_CODE_ACCOUNT_EXISTS = "auth/email-already-in-use";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

const SignUpFormBase = props => {
  console.log(props);
  const [state, setState] = useState({ ...INITIAL_STATE });
  const { username, email, passwordOne, passwordTwo, error, isAdmin } = state;

  const handleSubmit = event => {
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    props.firebase
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return props.firebase.user(authUser.user.uid).set(
          {
            username,
            email,
            roles
          },
          { merge: true }
        );
      })
      .then(() => {
        return props.firebase.sendEmailVerification();
      })
      .then(() => {
        setState({ ...INITIAL_STATE });
        props.history.goBack();
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        setState({ ...state, error });
      });

    event.preventDefault();
  };

  const onChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <EmailSignUpForm
      onSubmit={handleSubmit}
      isInvalid={
        passwordOne !== passwordTwo ||
        passwordOne === "" ||
        email === "" ||
        username === ""
      }
      onChange={onChange}
      error={error}
    />
  );
};

const SignUpForm = compose(
  withStyles(styles),
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpForm;
