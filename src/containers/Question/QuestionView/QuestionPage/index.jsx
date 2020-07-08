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
import ButtonGroup from "@material-ui/core/ButtonGroup";
import createStyles from "@material-ui/core/styles/createStyles";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import makeStyles from "@material-ui/core/styles/makeStyles";
import stringSimilarity from "string-similarity";
import { retry } from "utils/retryLazyImports";
import MoTypography from "components/library/MoTypography";
import MoSnackbar from "components/library/MoSnackBar";
import MoPage from "components/library/MoPage";
import MoSpinner from "components/library/MoSpinner";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

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
  userRole,
  data,
  match
}) => {
  const [question, setQuestion] = useState(data);
  const [isCorrect, setIsCorrect] = useState(false);
  const [snackbarProps, setSnackbarProps] = useState(null);
  const [matchPercent, setMatchPercent] = useState();
  const [isHintTypist, setIsHintTypist] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const useStyles = makeStyles(theme =>
    createStyles({
      textAlignRight: { textAlign: "right" },
      button: { color: theme.grey.medium },
      buttonArea: {
        textAlign: "left",
        width: "100%",
        "&:hover": {
          background: theme.grey.superLight,
          cursor: "text"
        }
      },
      // section: { paddingTop: theme.space?.lg, paddingBottom: theme.space?.xl }
      section: { paddingBottom: theme.space?.xl }
    })
  );

  useEffect(() => {
    try {
      setQuestion({ ...data, question: JSON.parse(data.question) });
    } catch {
      setQuestion(data);
    }
  }, [data]);

  const classes = useStyles();
  const triggerNextQuestion = useCallback(() => {
    const id = Number(question.id) + 1;
    /* Clear questions */
    setQuestion({});
    /* Clear matchPercent */
    setMatchPercent();

    setIsCorrect(false);
    setSnackbarProps({ isActive: false });
    handleNavigation(id);
  }, [handleNavigation, question]);

  /* Checks if user code matches Pre made answer */
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
          buttonText: "Keep Going",
          isActive: true,
          title: "Hooray!",
          onClick: () => triggerNextQuestion()
        });
      } else {
        setQuestion({ ...question, question: userAnswer });
      }
    },
    [authUser, firebase, match, triggerNextQuestion, question]
  );

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
          isEditMode={false}
          isPlayground={question?.isPlayground}
          isMobile={isMobile}
          matchPercent={matchPercent}
          isHintTypist={isHintTypist}
          sm={6}
          md={6}
        />
      </section>
      {question?.answer && !question?.question && (
        <section className={classes.section}>
          <Grid container>
            <Grid item md={6}>
              <Button
                className={classes.button}
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
            <Grid item md={6}>
              <ButtonGroup
                variant="text"
                color="default"
                aria-label="text primary button group"
              >
                <Button startIcon={<KeyboardArrowLeftIcon />} />
                <Button>{question?.length}</Button>
                <Button startIcon={<KeyboardArrowRightIcon />} />
              </ButtonGroup>
            </Grid>
          </Grid>
        </section>
      )}
      {snackbarProps && (
        <MoSnackbar authUser={authUser} snackbarProps={snackbarProps} />
      )}
    </Suspense>
  );
};
export default QuestionPage;

