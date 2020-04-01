import React from "react";

import Grid from "@material-ui/core/Grid";
import MoPage from "../../components/shared/MoPage";
import SocialSignIn from "../../components/SocialSignIn/";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => (
  <>
    <MoPage img="" title="Sign up to get started 😎" loading={false}>
      <Grid container spacing={3}>
        <SignUpForm />
        <SocialSignIn />
      </Grid>
    </MoPage>
  </>
);

export default SignUpPage;
