import React from "react";

import Grid from "@material-ui/core/Grid";
import MoPage from "../../components/shared/MoPage";
import SocialSignIn from "../../components/SocialSignIn/";
import SignInForm from "./SignInForm";

const SignInPage = () => (
  <MoPage img="" title="Welcome Back!" loading={false}>
    <Grid container spacing={3}>
      <SignInForm />
      <SocialSignIn />
    </Grid>
  </MoPage>
);

export default SignInPage;
