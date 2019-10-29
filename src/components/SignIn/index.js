import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForgot";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	},
	input: {
		margin: theme.spacing(1)
	}
}));

const SignInPage = () => (
	<div>
		<h1>Sign In</h1>
		<SignInForm />
		<PasswordForgetLink />
		<SignUpLink />
	</div>
);

const INITIAL_STATE = {
	email: "",
	password: "",
	error: null
};

const SignInFormBase = props => {
	const classes = useStyles();
	const [state, setState] = useState({ ...INITIAL_STATE });
	const { email, password, error } = state;
	const isInvalid = password === "" || email === "";

	const onSubmit = event => {
		props.firebase
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				setState({ ...INITIAL_STATE });
				props.history.push(ROUTES.HOME);
			})
			.catch(error => {
				setState({ error });
			});

		event.preventDefault();
	};

	const onChange = event => {
		console.log({ [event.target.name]: event.target.value });
		setState({ ...state, [event.target.name]: event.target.value });
	};

	return (
		<form onSubmit={onSubmit}>
			<Input
				className={classes.input}
				name="email"
				value={email}
				onChange={onChange}
				type="email"
				placeholder="Email"
			/>
			<Input
				className={classes.input}
				name="password"
				value={password}
				onChange={onChange}
				type="password"
				placeholder="Password"
			/>
			<Button className={classes.button} disabled={isInvalid} type="submit">
				Sign In
			</Button>

			{error && <p> {error.message}</p>}
		</form>
	);
};

const SignInForm = compose(
	withRouter,
	withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
