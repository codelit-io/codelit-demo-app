import React, { lazy, useEffect, useState, Suspense } from "react";

import * as ROUTES from "../../constants/routes";

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
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const [snackbarProps, setSnackbarProps] = useState(null);

  const triggerNextQuestion = () => {
    const nextLevelReqPoints = Number(question.id) + 1;
    navigateToNextLevel(nextLevelReqPoints);
  };

  const navigateToNextLevel = id => {
    history.push(
      ROUTES.QUESTIONS.path + "/" + match.params.collection + "/" + id
    );
  };

  /* * *  awardPlayerPoints   * * * * * * * * * * * * *
   *  Awards users a point based on level completion  *
   * * * * * * * * * * * * * * * * * * * * * * * * * */

  const awardPlayerPoints = authUser => {
    const nextLevelReqPoints = Number(question.id);

    if (authUser) {
      /* Prevents overwriting player points if played older questions */
      /* TODO move me */
      const points =
        nextLevelReqPoints > authUser.points
          ? nextLevelReqPoints
          : authUser.points;
      firebase.user(authUser.uid).update({ points });
    } else {
      console.log("User not signed up");
    }
  };

  /* * *  handleOnChange  *  * * * * * * * * * * * *
   *  Checks if user code matches Pre made answer  *
   * * * * * * * * * * * * * * * * * * * * * * *  */

  const handleOnChange = (userAnswer, authUser) => {
    if (userAnswer === "{}" || userAnswer === "") {
      return;
    }
    if (userAnswer.replace(/\s/g, "") === question.answer.replace(/\s/g, "")) {
      setQuestion({ ...question, isCorrect: true, question: userAnswer });
      awardPlayerPoints(authUser);
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
    setLoading(true);
    setIsCorrect(false);
    const unsubscribe = firebase.getCollectionById(match.params.collection, id).onSnapshot(snapshot => {
      if (snapshot.size) {
        let question = [];
        snapshot.forEach(doc => question.push({ ...doc.data(), uid: doc.id }));
        setQuestion(question[0]);
      } else {
        setQuestion({
          label: "You have finished all questions ✅",
          question: "<h1>Nice Job 🎉</h1>",
          language: "html"
        });
        setIsCorrect(false);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
      setSnackbarProps(null);
      setIsCorrect(false);
    };
  }, [firebase, match]);

  return (
    question && (
      <Suspense>
        <MoConfetti isActive={isCorrect} />
        <MoPage img="" title={question.topic} loading={loading} isCard={false}>
          {question.content && <Content content={question.content} />}
          <AuthUserContext.Consumer>
            {authUser => (
              <>
                <Grid item md={6} sm={12} xs={12}>
                  <MoParagraph
                    text={question.label}
                    fade={question.label && true}
                    margin="36px 0 36px"
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12}></Grid>
                {question && (
                  <CodeEditor
                    handleOnChange={userAnswer =>
                      handleOnChange(userAnswer, authUser)
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
        </MoPage>
      </Suspense>
    )
  );
};
export default withAuthentication(Question);
