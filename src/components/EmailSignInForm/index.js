import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from "./styles";
import SignUpLink from "../../components/SignUpLink";
import { PasswordForgetLink } from "../PasswordForgot";
import PropTypes from "prop-types";
import MoTitle from "../../components/shared/MoTitle"
const EmailSignInForm = ({ classes, onSubmit, isInvalid, onChange, error }) => {
  return (
    <div className={classes.card}>
      <main className={classes.main}>
        <CssBaseline />
        <div className={classes.paper}>
          <MoTitle text="Sign in" fade={true} margin="36px 0 36px" />
          <form className={classes.form} onSubmit={onSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                type="email"
                autoFocus
                onChange={onChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChange}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isInvalid}
            >
              Sign in
            </Button>
            {error && (
              <FormHelperText
                className={classes.error}
                id="component-error-text"
                margin="dense"
                error={true}
                focused={true}
              >
                {error.message}
              </FormHelperText>
            )}
          </form>
          <PasswordForgetLink />
          <SignUpLink />
        </div>
      </main>
    </div>
  );
};

EmailSignInForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailSignInForm);
