import React, { useState } from "react";

import * as ROUTES from "../../constants/routes";
import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import EmailSignInForm from "./EmailSignInForm";

import { PasswordForgetLink } from "../../components/PasswordForgot";
import PageCard from "../../components/shared/PageCard";
import PropTypes from "prop-types";
import { SignUpLink } from "../SignUp";
import { withFirebase } from "../../components/Firebase";
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
	const [state, setState] = useState({ ...INITIAL_STATE });
	const { email, password, error } = state;

	const handleSubmit = event => {
		props.firebase
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				setState({ ...INITIAL_STATE });
				props.history.push(ROUTES.HOME.path);
			})
			.catch(error => {
				setState({ ...state, error });
			});

		event.preventDefault();
	};

	const onChange = event => {
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
				history.push(ROUTES.HOME.path);
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

const SignInWithFacebookBase = ({ firebase, history, classes }) => {
	const [error, setError] = useState(null);
	const onSubmit = event => {
		firebase.signInWithFacebook().then(socialAuthUser => {
			// Create a user in your Firebase Realtime Database too
			return firebase
				.user(socialAuthUser.user.uid)
				.set({
					username: socialAuthUser.additionalUserInfo.profile.name,
					email: socialAuthUser.additionalUserInfo.profile.email || "none",
					roles: {}
				})
				.then(() => {
					setError(null);
					// Investigate if this this the correct approach
					history.push(ROUTES.HOME.path);
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

SignInWithFacebookBase.propTypes = {
	classes: PropTypes.object.isRequired
};

SignInWithGoogleBase.propTypes = {
	classes: PropTypes.object.isRequired
}

const SignInForm = compose(
	withRouter,
	withFirebase
)(SignInFormBase);

const SignInWithGoogle = compose(
	withStyles(styles),
	withRouter,
	withFirebase
)(SignInWithGoogleBase);

const SignInWithFacebook = compose(
	withStyles(styles),
	withRouter,
	withFirebase
)(SignInWithFacebookBase);

export default SignInPage;

export { SignInForm, SignInWithGoogle, SignInWithFacebook };
