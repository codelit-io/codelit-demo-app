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

import { BROWSER_MOCKUP } from "constants/i18n";
import { retry } from "helpers/retryLazyImports";
import awardPlayerPoints from "../awardPlayerPoints";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import stringSimilarity from "string-similarity";
import MoTypography from "components/library/MoTypography";
import MoSnackbar from "components/library/MoSnackBar";
import MoPage from "components/library/MoPage";
import MoSpinner from "components/library/MoSpinner";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import MoButtonIcon from "components/library/MoButtonIcon";

const CodeEditor = lazy(() =>
  retry(() => import("components/shared/CodeEditor"))
);

const MoConfetti = lazy(() =>
  retry(() => import("components/library/MoConfetti"))
);

const QuestionFooter = lazy(() => import("./QuestionFooter"));

const QuestionPage = ({
  authUser,
  firebase,
  handleOnClick,
  handleNavigation,
  isAdmin,
  isLoading,
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
      grey: { color: theme.grey?.medium },
      lightGrey: { color: theme.grey?.light },
      fixedIcon: {
        opacity: 0,
        position: "absolute",
        right: theme.space?.md,
        top: theme.space?.md
      },
      buttonArea: {
        textAlign: "left",
        opacity: isAdmin ? 0.6 : 1,
        width: "100%",
        "&:hover": {
          opacity: "1",
          cursor: "text"
        },
        "&:hover $fixedIcon": {
          opacity: 1
        }
      },
      section: { paddingBottom: theme.space?.xl },
      footer: {
        zIndex: "10",
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "100%"
      }
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
    setIsHintTypist(false);
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

  const IconComponent = () => (
    <MoButtonIcon editIcon={true} handleIconClick={e => handleOnClick(e)} />
  );

  return (
    <Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
      <MoConfetti isActive={isCorrect} />
      <MoPage
        isAdmin={isAdmin}
        title={question?.title}
        subtitle={question?.label}
        isCard={false}
        IconComponent={isAdmin && IconComponent}
      />
      {question?.content && (
        <MoTypography
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
          isConsole={isConsole}
          isPlayground={question?.isPlayground}
          isMobile={isMobile}
          noInline={false}
          matchPercent={matchPercent}
          isHintTypist={isHintTypist}
          sm={6}
          md={6}
          title={BROWSER_MOCKUP.CODE_EDITOR}
        />
      </section>
      <QuestionFooter
        isAdmin={isAdmin}
        classes={classes}
        setIsConsole={e => setIsConsole(e)}
        setIsHintTypist={e => setIsHintTypist(e)}
        triggerQuestion={e => triggerQuestion(e)}
        question={question}
      />
      <MoSnackbar authUser={authUser} snackbarProps={snackbarProps} />
    </Suspense>
  );
};
export default QuestionPage;
