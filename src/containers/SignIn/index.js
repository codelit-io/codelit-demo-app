import React from "react";

import Grid from "@material-ui/core/Grid";
import PageCard from "../../components/shared/PageCard";
import SocialSignIn from "../../components/SocialSignIn/";
import SignInForm from "./SignInForm";

const SignInPage = () => (
	<PageCard img="" title="Welcome Back!">
		<Grid container spacing={3}>
			<SignInForm />
			<SocialSignIn />
		</Grid>
	</PageCard>
);

export default SignInPage;
