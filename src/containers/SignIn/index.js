import React from "react";

import { AuthUserContext } from "components/shared/Session";
import Grid from "@material-ui/core/Grid";
import MoPage from "components/library/MoPage";
import SocialSignIn from "components/shared/SocialSignIn";
import SignInForm from "./SignInForm";

const SignInPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <MoPage
        img=""
        title={authUser ? "You are logged in 👍" : "Welcome Back 🤩"}
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
                <SignInForm />
              </Grid>
            </>
          )}
        </Grid>
      </MoPage>
    )}
  </AuthUserContext.Consumer>
);

export default SignInPage;
