import React from "react";

import Container from "@material-ui/core/Container";
import Navigation from "components/shared/Navigation";
// import useGlobal from "store";

const QuestionsEditPage = () => {
  // Global state
  // const [state] = useGlobal();
  // const { authUser, firebase } = state;

  return (
    <Container maxWidth="lg">
      <Navigation />
      <h1>Todo: This page should look like QuestionEditPage component</h1>
    </Container>
  );
};

export default QuestionsEditPage;
