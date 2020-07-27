import React from "react";

import Container from "@material-ui/core/Container";
import Navigation from "components/shared/Navigation";
import MoPage from "components/library/MoPage";

import PasswordForgetForm from "components/shared/PasswordForgot";

const PasswordReset = () => (
  <Container maxWidth="lg">
    <Navigation />
    <MoPage title="Reset your password">
      <PasswordForgetForm />
    </MoPage>
  </Container>
);

export default PasswordReset;
