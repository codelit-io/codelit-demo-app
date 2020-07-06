import React from "react";

import * as ROUTES from "constants/routes";
import { withAuthentication } from "components/shared/Session";
import Grid from "@material-ui/core/Grid";
import MoPage from "components/library/MoPage";
import SocialSignIn from "components/shared/SocialSignIn";
import SignInForm from "./SignInForm";
import MoButton from "components/library/MoButton";

const SignInPage = ({ authUser }) => (
  <MoPage
    title={authUser ? "You are logged in 👍" : "Welcome Back 🤩"}
    isLoading={false}
  >
    <Grid container spacing={3}>
      {authUser ? (
        <Grid item sm={12} md={12}>
          <MoButton
            isArrowIcon={true}
            color="primary"
            variant="text"
            size="large"
            text="View All Courses"
            href={ROUTES.COLLECTIONS.path}
          />
        </Grid>
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
);

export default withAuthentication(SignInPage);
