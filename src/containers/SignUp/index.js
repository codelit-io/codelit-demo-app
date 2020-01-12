import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";

import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import Input from "@material-ui/core/Input";
import PageCard from "../../components/shared/PageCard";
import { withFirebase } from "../../components/Firebase";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
	button: {
		margin: theme.spacing(1)
	},
	input: {
		margin: theme.spacing(1)
	}
});

const SignUpPage = () => (
	<>
		<PageCard img="" title="Get Started today!">
			<SignUpForm />
		</PageCard>
	</>
);

const INITIAL_STATE = {
	username: "",
	email: "",
	passwordOne: "",
	passwordTwo: "",
	isAdmin: false,
	error: null
};

const SignUpFormBase = ({ firebase, history, classes}) => {
	const [state, setState] = useState({ ...INITIAL_STATE });
	const { username, email, passwordOne, passwordTwo, error, isAdmin } = state;
	const roles = {};
	const isInvalid =
		passwordOne !== passwordTwo ||
		passwordOne === "" ||
		email === "" ||
		username === "";

	const onSubmit = event => {
		if (isAdmin) {
			roles[ROLES.ADMIN] = ROLES.ADMIN;
		}

		firebase
			.createUserWithEmailAndPassword(email, passwordOne)
			.then(authUser => {
				// Create a user in your Firebase realtime database
				return firebase.user(authUser.user.uid).set(
					{
						username,
						email,
						roles
					},
					{ merge: true }
				);
			})
			.then(() => {
				setState({ ...INITIAL_STATE });
				history.push(ROUTES.HOME.path);
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
		Don't have an account? <Link to={ROUTES.SIGN_UP.path}>Sign Up</Link>
	</p>
);

const SignUpForm = compose(withStyles(styles) ,withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
