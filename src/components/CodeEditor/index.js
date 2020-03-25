import React, { lazy, useState, useEffect, Suspense } from "react";

import Grid from "@material-ui/core/Grid";

const LiveProviderCore = lazy(() => import("./LiveProviderCore"));

const CodeEditor = ({ handleOnChange, md, sm, question }) => {
  const [state, setState] = useState(question);

  useEffect(() => {
    if (question) {
      try {
        const prettyQuestion = JSON.parse(question.question);
        setState({ ...question, question: prettyQuestion });
      } catch {
        setState(question);
      }
    }
  }, [question]);

  return (
    <Grid container spacing={4}>
      <Suspense>
        <LiveProviderCore
          question={state}
          handleOnChange={handleOnChange}
          md={md}
          sm={sm}
        />
      </Suspense>
    </Grid>
  );
};

export default CodeEditor;
