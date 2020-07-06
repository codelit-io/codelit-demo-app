import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import Input from "@material-ui/core/Input";
import withStyles from "@material-ui/core/styles/withStyles";
import { withFirebase } from "../Firebase";

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    margin: theme.spacing(1)
  }
});

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const PasswordChangeForm = ({ firebase, classes }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const { passwordOne, passwordTwo, error } = state;
  const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

  const onSubmit = event => {
    firebase
      .passwordUpdate(passwordOne)
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
      <label> Password Change: </label>
      <Input
        className={classes.Input}
        name="passwordOne"
        value={passwordOne}
        onChange={onChange}
        type="password"
        placeholder="New Password"
      />
      <Input
        className={classes.Input}
        name="passwordTwo"
        value={passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirm New Password"
      />
      <Button className={classes.button} disabled={isInvalid} type="submit">
        Reset Your Password
      </Button>

      {error && <p> {error.message} </p>}
    </form>
  );
};

export default compose(withStyles(styles), withFirebase)(PasswordChangeForm);
