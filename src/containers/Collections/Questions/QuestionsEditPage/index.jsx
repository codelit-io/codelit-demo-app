import React from "react";

import Container from "@material-ui/core/Container";
import Navigation from "components/shared/Navigation";
import { withAuthentication } from "components/shared/Session";

const QuestionsEditPage = () => {
  return (
    <Container maxWidth="lg">
      <Navigation />
      <h1>Todo: This page should look like QuestionEditPage component</h1>
    </Container>
  );
};

export default withAuthentication("isAdmin")(QuestionsEditPage);
