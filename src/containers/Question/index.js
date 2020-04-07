/**
 * Single Question is code editor, code preview and error console. This container fetches a single question
 * @prop {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @prop {Object} history - Provides several different implementations for managing session history in JavaScript in various environments - comes from withRouter and passed to withAuthentication hoc
 * @returns {<CodeEditor/>} - returns CodeEditor component which renders the rest of the components 
 * @withAuthentication - HOC provides firebase and match props
 */

import React, { lazy, useEffect, useState, Suspense } from "react";

import * as ROUTES from "../../constants/routes";

import awardPlayerPoints from "./awardPlayerPoints";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AuthUserContext from "../../components/Session/context";
import Content from "./Content";
import Grid from "@material-ui/core/Grid";
import MoParagraph from "../../components/shared/MoParagraph";
import MoPage from "../../components/shared/MoPage";
import MoSnackbar from "../../components/shared/MoSnackBar";
import withAuthentication from "../../components/Session/withAuthentication";

const CodeEditor = lazy(() => import("../../components/CodeEditor"));
const MoConfetti = lazy(() => import("../../components/shared/MoConfetti"));

const Question = ({ firebase, history, match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const [snackbarProps, setSnackbarProps] = useState(null);

  const triggerNextQuestion = () => {
    const nextLevelReqPoints = Number(question.id) + 1;
    navigateToNextLevel(nextLevelReqPoints);
  };

  const navigateToNextLevel = id => {
    /* Clear questions */
    setQuestion({});

    setIsCorrect(false);
    /* A delay before navigating to a new page */
    setTimeout(() => {
      history.push(
        ROUTES.QUESTIONS.path + "/" + match.params.collection + "/" + id
      );
    }, 600);
  };

  /* Awards users a point based on level completion */
  const handleAwardPlayerPoints = authUser =>
    awardPlayerPoints(authUser, firebase, question.id, match.params.collection);

  /* Checks if user code matches Pre made answer */
  const handleOnChange = (authUser, userAnswer) => {
    if (userAnswer === "{}" || userAnswer === "") {
      return;
    }
    if (userAnswer.replace(/\s/g, "") === question.answer.replace(/\s/g, "")) {
      setQuestion({ ...question, isCorrect: true, question: userAnswer });
      handleAwardPlayerPoints(authUser);
      setIsCorrect(true);
      setSnackbarProps({
        title: "Hooray!",
        buttonText: "Keep Going",
        buttonIcon: <ArrowForwardIcon />
      });
    } else {
      setQuestion({ ...question, question: userAnswer });
    }
  };

  useEffect(() => {
    const id = match.params.question;
    setIsLoading(true);
    const unsubscribe = firebase
      .getCollectionById("topics/" + match.params.collection + "/questions", id)
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let question = [];
          snapshot.forEach(doc =>
            question.push({ ...doc.data(), uid: doc.id })
          );
          setQuestion(question[0]);
        } else {
          setQuestion({
            label: "You have finished all questions ✅",
            question: "<h1>Nice Job 🎉</h1>",
            language: "html"
          });
        }
        setIsLoading(false);
      });

    return () => {
      unsubscribe();
      setSnackbarProps(null);
    };
  }, [firebase, match]);

  return (
    question && (
      <Suspense>
        <MoConfetti isActive={isCorrect} />
        <MoPage img="" title={question.topic} isLoading={isLoading} isCard={false}>
          {question.content && <Content content={question.content} />}
          {!isLoading && (
            <AuthUserContext.Consumer>
              {authUser => (
                <>
                  <Grid item md={6} sm={12}>
                    <MoParagraph
                      text={question.label}
                      fade={question.label && true}
                      margin="36px 0 36px"
                    />
                  </Grid>
                  {question && (
                    <CodeEditor
                      handleOnChange={userAnswer =>
                        handleOnChange(authUser, userAnswer)
                      }
                      sm={6}
                      md={6}
                      question={question}
                    />
                  )}
                  {snackbarProps && (
                    <MoSnackbar
                      isActive={isCorrect}
                      authUser={authUser}
                      snackbarProps={snackbarProps}
                      triggerNextQuestion={() => triggerNextQuestion()}
                    />
                  )}
                </>
              )}
            </AuthUserContext.Consumer>
          )}
        </MoPage>
      </Suspense>
    )
  );
};
export default withAuthentication(Question);
