import React, { useState } from "react";

import * as ROUTES from "../../constants/routes";
import { compose } from "recompose";
import EmailSignInForm from "./EmailSignInForm";
import Grid from "@material-ui/core/Grid";

import PageCard from "../../components/shared/PageCard";
import { withFirebase } from "../../components/Firebase";
import { withRouter } from "react-router-dom";

import SocialSignIn from "../../components/SocialSignIn/";

const SignInPage = () => (
	<PageCard img="" title="Welcome Back!">
		<Grid container spacing={4}>
			<Grid item md={6}>
				<SignInForm />
			</Grid>
			<Grid item md={6}>
				<SocialSignIn />
			</Grid>
			<Grid item md={6}></Grid>
		</Grid>
	</PageCard>
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



const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);


export default SignInPage;

export { SignInForm };
