import React from "react";

import * as ROUTES from "constants/routes";
import { SIGN_UP } from "constants/i18n";
import { withAuthentication } from "components/shared/Session";
import Grid from "@material-ui/core/Grid";
import MoPage from "components/library/MoPage";
import MoButton from "components/library/MoButton";
import SocialSignIn from "components/shared/SocialSignIn";
import SignUpForm from "./SignUpForm";

const SignUpPage = ({ authUser }) => (
  <MoPage
    title={authUser ? SIGN_UP.PAGE_TITLE : SIGN_UP.PAGE_LOGGED_IN_TITLE}
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
            text={SIGN_UP.VIEW_ALL_COURSES}
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
