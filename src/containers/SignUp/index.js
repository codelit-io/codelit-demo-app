import React from "react";

import * as ROUTES from "constants/routes";
import { withAuthentication } from "components/shared/Session";
import Grid from "@material-ui/core/Grid";
import MoPage from "components/library/MoPage";
import MoLinkButton from "components/library/MoLinkButton";
import SocialSignIn from "components/shared/SocialSignIn";
import SignUpForm from "./SignUpForm";

const SignUpPage = ({ authUser }) => (
  <MoPage
    title={authUser ? "You are signed up 👍" : "Sign up to get started 😎"}
    isLoading={false}
  >
    <Grid container spacing={3}>
      {authUser ? (
        <Grid item sm={12} md={12}>
          <MoLinkButton
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
            <SignUpForm />
          </Grid>
        </>
      )}
    </Grid>
  </MoPage>
);

export default withAuthentication(SignUpPage);
