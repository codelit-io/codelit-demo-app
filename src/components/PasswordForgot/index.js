import React, { useState } from "react";
import { Link } from "react-router-dom";

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

const INITIAL_STATE = {
	email: "",
	error: null
};

const PasswordForgotPage = () => (
	<div>
		<h1>Password Forgot</h1>
		<PasswordForgetForm />
	</div>
);

const PasswordForgetFormBase = props => {
	const classes = useStyles();
	const [state, setState] = useState({ ...INITIAL_STATE });

	const { email, error } = state;

	const isInvalid = email === "";

	const onSubmit = event => {
		props.firebase
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
				Reset My Password
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

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
