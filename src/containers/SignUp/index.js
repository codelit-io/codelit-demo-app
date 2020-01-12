import React from "react";

import Grid from "@material-ui/core/Grid";
import PageCard from "../../components/shared/PageCard";
import SocialSignIn from "../../components/SocialSignIn/";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => (
	<>
		<PageCard img="" title="Get Started today!">
			<Grid container spacing={4}>
				<Grid item md={6}>
					<SignUpForm />
				</Grid>
				<Grid item md={6}>
					<SocialSignIn />
				</Grid>
				<Grid item md={6}></Grid>
			</Grid>
		</PageCard>
	</>
);

export default SignUpPage;
