import React from "react";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { compose } from "recompose";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import styles from "./styles";
import SignInWithFacebook from "./SignInWithFacebook";
import SignInWithGoogle from "./SignInWithGoogle";
import withLayout from "../shared/Layout";

const SocialSignIn = ({ classes }) => {
	return (
		<main className={classes.main}>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOpenIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Social Media Sign in
				</Typography>
				<SignInWithFacebook />
				<SignInWithGoogle />
			</div>
		</main>
	);
};

SocialSignIn.propTypes = {
	classes: PropTypes.object.isRequired
};

export default compose(withLayout,withStyles(styles))(SocialSignIn);
