import React from "react";

import Container from "@material-ui/core/Container";
import Navigation from "components/shared/Navigation";
import MoPage from "components/library/MoPage";

import PasswordForgetForm from "components/shared/PasswordForgot";

const PasswordReset = ({ authUser, firebase }) => (
  <Container maxWidth="lg">
    <Navigation authUser={authUser} firebase={firebase} />
    <MoPage title="Reset your password">
      <PasswordForgetForm />
    </MoPage>
  </Container>
);

export default PasswordReset;
