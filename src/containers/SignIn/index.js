import React from "react";

import * as ROUTES from "constants/routes";
import { SIGN_IN } from "constants/i18n";
import { withAuthentication } from "components/shared/Session";
import Grid from "@material-ui/core/Grid";
import MoPage from "components/library/MoPage";
import SocialSignIn from "components/shared/SocialSignIn";
import SignInForm from "./SignInForm";
import MoButton from "components/library/MoButton";

const SignInPage = ({ authUser }) => (
  <MoPage
    title={
      authUser ? SIGN_IN.PAGE_LOGGED_IN_TITLE : SIGN_IN.PAGE_LOGGED_IN_TITLE
    }
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
            text={SIGN_IN.VIEW_ALL_COURSES}
            href={ROUTES.COLLECTIONS.path}
          />
        </Grid>
      ) : (
        <>
          <Grid item sm={6} md={6} style={{ width: "100%" }}>
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
