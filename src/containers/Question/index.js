/**
 * Single Question is code editor, code preview and error console. This container fetches a single question
 * @prop {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @prop {Object} history - Provides several different implementations for managing session history in JavaScript in various environments - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<CodeEditor/>} - returns CodeEditor component which renders the rest of the components
 */

import React, { lazy, useCallback, useEffect, useState, Suspense } from "react";

import * as ROUTES from "../../constants/routes";

import awardPlayerPoints from "./awardPlayerPoints";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Content from "./Content";
import MoSnackbar from "../../components/shared/MoSnackBar";
import QuestionPage from "./QuestionPage";
import withAuthentication from "../../components/Session/withAuthentication";

const CodeEditor = lazy(() => import("../../components/CodeEditor"));
const MoConfetti = lazy(() => import("../../components/shared/MoConfetti"));

const Question = ({ authUser, firebase, history, match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const [snackbarProps, setSnackbarProps] = useState(null);

  const triggerNextQuestion = useCallback(() => {
    const id = Number(question.id) + 1;
    /* Clear questions */
    setQuestion({});

    setIsCorrect(false);
    /* A delay before navigating to a new page */
    setTimeout(() => {
      history.push(
        ROUTES.COLLECTIONS.path + "/" + match.params.collection + "/" + id
      );
    }, 600);
  }, [history, match.params.collection, question.id]);

  /* Checks if user code matches Pre made answer */
  const handleOnChange = useCallback(
    (userAnswer) => {
      if (userAnswer === "{}" || userAnswer === "") {
        return;
      }
      if (
        userAnswer.replace(/\s/g, "") === question.answer.replace(/\s/g, "")
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
          title: "Hooray!",
          buttonText: "Keep Going",
          buttonIcon: <ArrowForwardIcon />,
        });
      } else {
        setQuestion({ ...question, question: userAnswer });
      }
    },
    [authUser, firebase, match.params.collection, question]
  );

  useEffect(() => {
    const id = match.params.questionId;
    setIsLoading(true);
    const unsubscribe = firebase
      .getCollectionById(
        "courses/" + match.params.collection + "/questions",
        id
      )
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          let question = [];
          snapshot.forEach((doc) =>
            question.push({ ...doc.data(), uid: doc.id })
          );
          setQuestion(question[0]);
        } else {
          if (id === "new") {
            setQuestion({
              title: "Title goes here",
              label: "Subtitle goes here",
              question: "<h1>Question goes here</h1>",
              answer: "<h1>Answer goes here🎉</h1>",
              language: "html",
            });
          } else {
            setQuestion({
              label: "You have finished all questions ✅",
              question: "<h1>Nice Job 🎉</h1>",
              language: "html",
            });
          }
        }
        setIsLoading(false);
      });

    return () => {
      unsubscribe();
      setSnackbarProps(null);
    };
  }, [firebase, match]);

  return (
    <Suspense>
      <MoConfetti isActive={isCorrect} />
      <QuestionPage
        authUser={authUser}
        subtitle={question.label}
        title={question.title}
        isLoading={isLoading}
        isCard={false}
      />
      {question.content && <Content content={question.content} />}
      {!isLoading && (
        <>
          {question && (
            <CodeEditor
              handleOnChange={(userAnswer) => handleOnChange(userAnswer)}
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
    </Suspense>
  );
};
export default withAuthentication(Question);
