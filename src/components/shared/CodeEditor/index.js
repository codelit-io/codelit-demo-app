import React, { lazy, useState, useEffect, Suspense } from "react";

import Grid from "@material-ui/core/Grid";

const LiveProviderCore = lazy(() => import("./LiveProviderCore"));

const CodeEditor = ({ handleOnChange, md, sm, matchPercent, question }) => {
  const [state, setState] = useState(question);

  useEffect(() => {
    if (question) {
      try {
        /* Questions can contain special JSON characters that needs to be parsed */
        const parseQuestion = JSON.parse(question.question);
        setState({ ...question, question: parseQuestion });
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
          matchPercent={matchPercent}
        />
      </Suspense>
    </Grid>
  );
};

export default CodeEditor;
