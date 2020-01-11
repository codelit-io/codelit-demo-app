import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../../components/PasswordForgot";
import { withFirebase } from "../../components/Firebase";
import * as ROUTES from "../../constants/routes";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "@material-ui/core";
import PageCard from "../../components/shared/PageCard";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	},
	input: {
		margin: theme.spacing(1)
	}
}));

const SignInPage = () => (
	<>
		<PageCard img="" title="Welcome Back!">
			<SignInForm />
			<SignInWithGoogle />
			<SignInWithFacebook />
			<PasswordForgetLink />
			<SignUpLink />
		</PageCard>
	</>
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
		event.preventDefault();
		props.firebase
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				setState({ ...INITIAL_STATE });
				props.history.push(ROUTES.HOME.path);
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
			<Button color="primary" className={classes.button} disabled={isInvalid} type="submit">
				Sign In
			</Button>

			{error && <p> {error.message}</p>}
		</form>
	);
};

const SignInWithGoogleBase = props => {
	const classes = useStyles();
	const [error, setError] = useState({ error: null });
	const onSubmit = event => {
		props.firebase
			.signInWithGoogle()
			.then(socialAuthUser => {
				// Create a user in Firebase Realtime Database
				return props.firebase.user(socialAuthUser.user.uid).set(
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
				props.history.push(ROUTES.HOME.path);
			})
			.catch(error => setError(error));
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmit}>
			<Button color="primary" className={classes.button} type="submit">
				{" "}
				SIgn In with Google
			</Button>

			{error && <p>{error.message}</p>}
		</form>
	);
};

const SignInWithFacebookBase = props => {
	const classes = useStyles();
	const [error, setError] = useState(null);
	const onSubmit = event => {
		props.firebase.signInWithFacebook().then(socialAuthUser => {
			// Create a user in your Firebase Realtime Database too
			return props.firebase
				.user(socialAuthUser.user.uid)
				.set({
					username: socialAuthUser.additionalUserInfo.profile.name,
					email: socialAuthUser.additionalUserInfo.profile.email || "none",
					roles: {}
				})
				.then(() => {
					setError(null);
					// Investigate if this this the correct approach
					props.history.push(ROUTES.HOME.path);
				})
				.catch(error => setError(error));
		});
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmit}>
			<Button color="primary" className={classes.button} type="submit">
				Sign In with Facebook
			</Button>

			{error && <p>{error.message}</p>}
		</form>
	);
};

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

const SignInWithGoogle = compose(
	withRouter,
	withFirebase
)(SignInWithGoogleBase);

const SignInWithFacebook = compose(
	withRouter,
	withFirebase
)(SignInWithFacebookBase);

export default SignInPage;

export { SignInForm, SignInWithGoogle, SignInWithFacebook };
