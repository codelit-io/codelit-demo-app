import React from "react";

import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import QuestionPageNav from "./QuestionPageNav";

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
      {/* TODO: move the follow to another component e.g. CodeEditorBottomNav */}
      <Grid container>
        <Grid item xs={4} sm={3} md={3}>
          {/* Render if answer is available */}
          <Button
            disabled={question.question ? true : false}
            aria-label="Need a hint?"
            aria-haspopup="true"
            startIcon={<HelpIcon />}
            onClick={() => {
              setIsHintTypist(true);
            }}
          >
            Need a hint?
          </Button>
        </Grid>
        <Grid item xs={4} sm={3} md={3} className={classes.textAlignRight}>
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
        <Grid item xs={4} sm={6} md={6} className={classes.textAlignRight}>
          <QuestionPageNav
            isAdmin={isAdmin}
            prevClick={() => triggerQuestion("prev")}
            nextClick={() => triggerQuestion("next")}
            isCorrect={question.isCorrect}
            id={question.id}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default QuestionFooter;
