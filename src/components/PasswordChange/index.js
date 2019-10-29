import React, { useState } from "react";

import { withFirebase } from "../Firebase";

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
	passwordOne: "",
	passwordTwo: "",
	error: null
};

const PasswordChangeForm = props => {
	const classes = useStyles();
	const [state, setState] = useState({ ...INITIAL_STATE });
	const { passwordOne, passwordTwo, error } = state;
	const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

	const onSubmit = event => {
		props.firebase
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
			<Button className={classes.Button} disabled={isInvalid} type="submit">
				Reset My Password
			</Button>

			{error && <p> {error.message} </p>}
		</form>
	);
};

export default withFirebase(PasswordChangeForm);
