import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import LiveProviderBase from "./LiveProviderBase";

const CodeEditor = ({ question, handleOnChange }) => {
  const [state, setState] = useState(question);

  useEffect(() => {
    if (question.question) {
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
      <LiveProviderBase question={state} handleOnChange={handleOnChange} />
    </Grid>
  );
};

const CodeEditorContainer = React.memo(CodeEditor);

export default CodeEditorContainer;
