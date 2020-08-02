import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CodeIcon from "@material-ui/icons/Code";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";
import QuestionPageNav from "./QuestionPageNav";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/box";

const QuestionFooter = ({
  classes,
  isAdmin,
  setIsConsole,
  setIsHintTypist,
  triggerQuestion,
  question
}) => {
  return (
    <Box position="fixed" bottom="0" right="0" width="100%" zIndex="10">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="xl">
          <Grid container alignItems="center">
            <Grid item xs={6} sm={6} md={6}>
              <Tooltip title="Need a hint?" placement="top">
                <span>
                  <IconButton
                    aria-label="Need a hint?"
                    aria-haspopup="true"
                    disabled={question.question ? true : false}
                    onClick={() => {
                      setIsHintTypist(true);
                    }}
                  >
                    <HelpIcon />
                  </IconButton>
                </span>
              </Tooltip>
              <Tooltip title="Show console" placement="top">
                <IconButton
                  aria-label="Show console"
                  aria-haspopup="true"
                  onClick={() => {
                    setIsConsole(true);
                  }}
                >
                  <CodeIcon />
                </IconButton>
              </Tooltip>
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
      </AppBar>
    </Box>
  );
};

export default QuestionFooter;
