/**
 * Single Question is code editor, code preview and error console. This container fetches a single question
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} history - Provides several different implementations for managing session history in JavaScript in various environments - comes from withRouter and passed to withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Object} userRole - User role  object returns an objet of roles with a boolean  flag to indicate if the user has the role or not
 * @returns {<CodeEditor/>} - returns CodeEditor component which renders the rest of the components
 */

import React, { lazy, useCallback, useEffect, useState, Suspense } from "react";

import awardPlayerPoints from "../awardPlayerPoints";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import createStyles from "@material-ui/core/styles/createStyles";
import CodeIcon from "@material-ui/icons/Code";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import makeStyles from "@material-ui/core/styles/makeStyles";
import stringSimilarity from "string-similarity";
import { retry } from "utils/retryLazyImports";
import MoTypography from "components/library/MoTypography";
import MoSnackbar from "components/library/MoSnackBar";
import MoPage from "components/library/MoPage";
import MoSpinner from "components/library/MoSpinner";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import QuestionPageNav from "./QuestionPageNav";

const CodeEditor = lazy(() =>
  retry(() => import("components/shared/CodeEditor"))
);

const MoConfetti = lazy(() =>
  retry(() => import("components/library/MoConfetti"))
);

const QuestionPage = ({
  authUser,
  firebase,
  handleOnClick,
  handleNavigation,
  isLoading,
  userRole,
  data,
  match
}) => {
  const [question, setQuestion] = useState(data);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isConsole, setIsConsole] = useState(false);
  const [isHintTypist, setIsHintTypist] = useState(false);
  const [snackbarProps, setSnackbarProps] = useState({ isActive: false });
  const [matchPercent, setMatchPercent] = useState();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles(theme =>
    createStyles({
      textAlignRight: { textAlign: "right" },
      grey: { color: theme.grey.medium },
      lightGrey: { color: theme.grey.light },
      fixedIcon: {
        opacity: 0,
        position: "absolute",
        right: theme.space.md,
        top: theme.space.md
      },
      buttonArea: {
        textAlign: "left",
        width: "100%",
        "&:hover": {
          background: theme.grey.superLight,
          cursor: "text"
        },
        "&:hover $fixedIcon": {
          opacity: 1
        }
      },
      section: { paddingBottom: theme.space?.xl }
    })
  );

  useEffect(() => {
    try {
      /* Set state when component is mounted and parse the question
      since the question passed with special formatting that needs to be applied*/
      setQuestion({ ...data, question: JSON.parse(data.question) });
    } catch {
      setQuestion(data);
    }
  }, [data]);

  const classes = useStyles();

  /**
   * Triggers the next question by cleaning state for the question,
   * hide snackbar and handle navigation
   * @param {string} type - next or prev to get correct question id
   *
   */
  const triggerQuestion = useCallback(
    type => {
      const id = {
        next: Number(question.id) + 1,
        prev: Number(question.id) - 1
      };
      setMatchPercent();
      setQuestion({
        question:
          "<pre style={{color:'rgb(169, 169, 169)'}}>No code to preview</pre>"
      });
      setIsCorrect(false);
      setSnackbarProps({ isActive: false });
      handleNavigation(id[type]);
    },
    [handleNavigation, question]
  );

  /**
   * Checks if user code matches Pre made answer,
   * then sets the state data, award player, and handle snackbar
   * @param {string} userAnswer - changes when user writes a new answer in the code editor
   *
   */
  const handleOnChange = useCallback(
    ({ userAnswer }) => {
      if (userAnswer === "{}" || userAnswer === "") {
        return;
      }

      const userAnswerTrimmed = userAnswer.replace(/\s/g, "");
      const correctAnswerTrimmed = question.answer.replace(/\s/g, "");
      const cosineSimilarityMatchPercent = stringSimilarity.compareTwoStrings(
        userAnswerTrimmed,
        correctAnswerTrimmed
      );
      setMatchPercent(cosineSimilarityMatchPercent * 100 || 10);
      if (
        // if user answer equals the stored answer in db
        userAnswerTrimmed === correctAnswerTrimmed ||
        // or if user answer is greater than or equal 98% based on jaroWrinker string matching algorithm
        cosineSimilarityMatchPercent * 100 >=
          (question?.matchPercent * 100 || 100)
      ) {
        setQuestion({ ...question, isCorrect: true, question: userAnswer });
        /* Awards users a point based on level completion */

        awardPlayerPoints(
          authUser,
          firebase,
          question.id,
          match.params.collection
        );
        setIsCorrect(true);
        setSnackbarProps({
          autoHideDuration: 4000,
          buttonText: "Keep Going",
          isActive: true,
          title: "Hooray!",
          onClick: () => triggerQuestion("next")
        });
      } else {
        setQuestion({ ...question, question: userAnswer });
      }
    },
    [authUser, firebase, match, triggerQuestion, question]
  );

  if (isLoading && !data) {
    return <MoSpinner isLoading={isLoading} color="primary" />;
  }

  return (
    <Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
      <MoConfetti isActive={isCorrect} />
      <ButtonBase
        className={classes.buttonArea}
        onClick={() => handleOnClick()}
        disabled={!userRole.isAdmin}
      >
        <MoPage
          isAdmin={userRole.isAdmin}
          title={question?.title}
          subtitle={question?.label}
          isCard={false}
        />
        <EditIcon color="primary" className={classes.fixedIcon} />
      </ButtonBase>
      {question?.content && (
        <MoTypography
          color="greyDark"
          font="breeSerif"
          marginBottom="md"
          text={question.content}
          variant="body1"
        ></MoTypography>
      )}
      <section className={classes.section}>
        <CodeEditor
          codeAnswer={question?.answer}
          codeLanguage={question?.language}
          codeQuestion={question?.question}
          handleOnChange={userAnswer => handleOnChange(userAnswer)}
          isEditMode={true}
          isConsole={isConsole}
          isPlayground={question?.isPlayground}
          isMobile={isMobile}
          noInline={false}
          matchPercent={matchPercent}
          isHintTypist={isHintTypist}
          sm={6}
          md={6}
        />
      </section>
      {question.id && (
        <section className={classes.section}>
          {/* TODO: move the follow to another component e.g. CodeEditorBottomNav */}
          <Grid container>
            <Grid item xs={4} sm={3} md={3}>
              {/* Render if answer is available */}
              <Button
                disabled={question.question ? true : false}
                className={
                  !question.question ? classes.grey : classes.lightGrey
                }
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
                className={classes.grey}
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
                isAdmin={userRole.isAdmin}
                prevClick={() => triggerQuestion("prev")}
                nextClick={() => triggerQuestion("next")}
                question={question}
              />
            </Grid>
          </Grid>
        </section>
      )}
      <MoSnackbar authUser={authUser} snackbarProps={snackbarProps} />
    </Suspense>
  );
};
export default QuestionPage;
