import React, { useState } from "react";

import { compose } from "recompose";
import EmailSignInForm from "components/shared/EmailSignInForm";

import { withFirebase } from "components/shared/Firebase";
import { withRouter } from "react-router-dom";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

const SignInFormBase = ({ firebase, history }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const { email, password, error } = state;

  const handleSubmit = (event) => {
    firebase
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setState({ ...INITIAL_STATE });
        history.goBack();
      })
      .catch((error) => {
        setState({ ...state, error });
      });

    event.preventDefault();
  };

  const onChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <EmailSignInForm
      onSubmit={handleSubmit}
      isInvalid={password === "" || email === ""}
      onChange={onChange}
      error={error}
    />
  );
};

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInForm;
