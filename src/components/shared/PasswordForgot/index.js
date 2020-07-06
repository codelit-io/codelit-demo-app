import React, { useState } from "react";

import * as ROUTES from "constants/routes";
import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import Input from "@material-ui/core/Input";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { withFirebase } from "components/shared/Firebase";

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    margin: theme.spacing(1)
  }
});

const INITIAL_STATE = {
  email: "",
  error: null
};

const PasswordForgotPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

const PasswordForgetFormBase = ({ firebase, classes }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const { email, error } = state;

  const isInvalid = email === "";

  const onSubmit = event => {
    firebase
      .passwordReset(email)
      .then(() => {
        setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        setState({ error });
      });

    event.preventDefault();
  };

  const onChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Forgot Password: </label>
      <Input
        className={classes.input}
        name="email"
        value={state.email}
        onChange={onChange}
        type="email"
        placeholder="Your Email"
      />
      <Button className={classes.button} disabled={isInvalid} type="submit">
        Reset Your Password
      </Button>
      {error && <p>{error.message}</p>}
    </form>
  );
};

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET.path}>Forgot Password?</Link>
  </p>
);

export default PasswordForgotPage;

const PasswordForgetForm = compose(
  withStyles(styles),
  withFirebase
)(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
