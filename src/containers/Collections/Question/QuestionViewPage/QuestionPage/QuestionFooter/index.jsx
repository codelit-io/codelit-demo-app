import React from "react";

import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import QuestionPageNav from "./QuestionPageNav";
import { Container } from "@material-ui/core";

const QuestionFooter = ({
  classes,
  isAdmin,
  setIsConsole,
  setIsHintTypist,
  triggerQuestion,
  question
}) => {
  return (
    <section className={classes.section}>
      {/* Todo Move styling object to this component */}
      <div
        style={{ position: "fixed", bottom: "1rem", right: 0, width: "100%" }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={6} sm={6} md={6}>
              {/* Render if answer is available */}
              <Button
                disabled={question.question ? true : false}
                aria-label="Hint"
                aria-haspopup="true"
                startIcon={<HelpIcon />}
                onClick={() => {
                  setIsHintTypist(true);
                }}
              >
                Hint
              </Button>
              <Button
                aria-label="Show error console"
                aria-haspopup="true"
                startIcon={<CodeIcon />}
                onClick={() => {
                  setIsConsole(true);
                }}
              >
                Console
              </Button>
            </Grid>
            <Grid item xs={6} sm={6} md={6} className={classes.textAlignRight}>
              <QuestionPageNav
                isAdmin={isAdmin}
                prevClick={() => triggerQuestion("prev")}
                nextClick={() => triggerQuestion("next")}
                isCorrect={question.isCorrect}
                id={question.id}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default QuestionFooter;
