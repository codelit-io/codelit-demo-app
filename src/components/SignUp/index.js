import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

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

const SignUpPage = () => (
	<div>
		<h1> Sign Up</h1>
		<SignUpForm />
	</div>
);

const INITIAL_STATE = {
	username: "",
	email: "",
	passwordOne: "",
	passwordTwo: "",
	error: null
};

const SignUpFormBase = props => {
	const classes = useStyles();
	const [state, setState] = useState({ ...INITIAL_STATE });
	const { username, email, passwordOne, passwordTwo, error } = state;
	const isInvalid =
		passwordOne !== passwordTwo ||
		passwordOne === "" ||
		email === "" ||
		username === "";

	const onSubmit = event => {
		props.firebase
			.createUserWithEmailAndPassword(email, passwordOne)
			.then(authUser => {
				// Create a user in your Firebase realtime database
				return props.firebase.user(authUser.user.uid).set({
					username,
					email
				});
			})
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
		setState({ ...state, [event.target.name]: event.target.value });
	};

	return (
		<form onSubmit={onSubmit}>
			<Input
				className={classes.input}
				name="username"
				value={username}
				onChange={onChange}
				type="text"
				placeholder="Your Name"
			/>
			<Input
				className={classes.input}
				name="email"
				value={email}
				onChange={onChange}
				type="email"
				placeholder="Your Email"
			/>
			<Input
				className={classes.input}
				name="passwordOne"
				value={passwordOne}
				onChange={onChange}
				type="password"
				placeholder="Password"
			/>
			<Input
				className={classes.input}
				name="passwordTwo"
				value={passwordTwo}
				onChange={onChange}
				type="password"
				placeholder="Confirm Password"
			/>
			<Button
				className={classes.button}
				variant="contained"
				type="submit"
				disabled={isInvalid}
			>
				{" "}
				Sign Up
			</Button>
			{error && <p>{error.message}</p>}
		</form>
	);
};

const SignUpLink = () => (
	<p>
		Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
	</p>
);

const SignUpForm = compose(
	withRouter,
	withFirebase
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
