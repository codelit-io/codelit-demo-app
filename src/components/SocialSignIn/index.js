import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { compose } from "recompose";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import styles from "./styles";
import SignInWithFacebook from "./SignInWithFacebook";
import SignInWithGoogle from "./SignInWithGoogle";
import withLayout from "../shared/Layout";
import MoTitle from "../shared/MoTitle";

const SocialSignIn = ({ classes }) => {
	return (
		<main className={classes.main}>
			<CssBaseline />
			<div className={classes.paper}>
				<MoTitle text="Social Media Sign in" fade={true} margin="36px 0 36px" />
				<SignInWithFacebook />
				<SignInWithGoogle />
			</div>
		</main>
	);
};

SocialSignIn.propTypes = {
	classes: PropTypes.object.isRequired
};

export default compose(withLayout, withStyles(styles))(SocialSignIn);
