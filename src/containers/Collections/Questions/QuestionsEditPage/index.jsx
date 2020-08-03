import React from "react";

import * as ROUTES from "constants/routes";
import Container from "@material-ui/core/Container";
import Navigation from "components/shared/Navigation";
import useGlobal from "store";

const QuestionsEditPage = ({ history }) => {
  // Global state
  const [{ authUser, firebase, userRole }] = useGlobal();

  if (!userRole?.isAdmin && authUser && firebase) {
    // TODO: Navigate to not authorized page
    history.push(ROUTES.SIGN_IN.path);
  }

  return (
    <Container maxWidth="lg">
      <Navigation />
      <h1>Todo: This page should look like QuestionEditPage component</h1>
    </Container>
  );
};

export default QuestionsEditPage;
