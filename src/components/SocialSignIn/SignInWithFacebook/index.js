import React, { useState } from "react";

import * as ROUTES from "../../../constants/routes";
import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import PropTypes from "prop-types";
import { withFirebase } from "../../Firebase";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
	button: {
		margin: theme.spacing(1)
	},
	input: {
		margin: theme.spacing(1)
	},

	form: {
		marginTop: theme.spacing(4)
	}
});

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
					history.goBack(ROUTES.QUESTIONS.path);
				})
				.catch(error => setError(error));
		});
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmit} className={classes.form}>
			<Button color="primary" variant="contained" className={classes.button} type="submit">
				Sign In with Facebook
			</Button>

			{error && <p>{error.message}</p>}
		</form>
	);
};

SignInWithFacebookBase.propTypes = {
	classes: PropTypes.object.isRequired
};

const SignInWithFacebook = compose(
	withStyles(styles),
	withRouter,
	withFirebase
)(SignInWithFacebookBase);

export default SignInWithFacebook;
