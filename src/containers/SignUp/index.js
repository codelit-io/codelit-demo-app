import React from "react";

import { AuthUserContext } from "components/shared/Session";
import Grid from "@material-ui/core/Grid";
import MoPage from "components/library/MoPage";
import SocialSignIn from "components/shared/SocialSignIn";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <MoPage
        img=""
        title={authUser ? "You are signed up 👍" : "Sign up to get started 😎"}
        isLoading={false}
      >
        <Grid container spacing={3}>
          {authUser ? (
            ""
          ) : (
            <>
              <Grid item sm={6} md={6}>
                <SocialSignIn />
              </Grid>
              <Grid item sm={6} md={6}>
                <SignUpForm />
              </Grid>
            </>
          )}
        </Grid>
      </MoPage>
    )}
  </AuthUserContext.Consumer>
);

export default SignUpPage;
