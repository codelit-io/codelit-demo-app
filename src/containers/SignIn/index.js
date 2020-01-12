import React from "react";

import Grid from "@material-ui/core/Grid";
import PageCard from "../../components/shared/PageCard";
import SocialSignIn from "../../components/SocialSignIn/";
import SignInForm from "./SignInForm";

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

export default SignInPage;