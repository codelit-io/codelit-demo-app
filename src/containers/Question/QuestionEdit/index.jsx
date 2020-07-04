/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Question Edit Mode Component ⁉️
 *
 * Single Question is code editor, code preview and error console. This container fetches a single question
 * This is the edit mode of the question, where edits can happen and only admins can access this for now
 *
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Object} history - Provides several different implementations for managing session history in JavaScript in various environments - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<QuestionForm/>} - returns CodeEditor component which renders the rest of the components
 *
 * @see Link [Example Question Page in Edit Mode](https://moskool.com/courses/mo-easy/1/isEditMode)
 */

import React, { useCallback, useEffect, useState, Suspense } from "react";

import * as ROLES from "constants/roles";

import MoSnackbar from "components/library/MoSnackBar";
import MoSpinner from "components/library/MoSpinner";
import QuestionForm from "containers/Question/QuestionEdit/QuestionForm";
import withAuthorization from "components/shared/Session/withAuthorization";
import { compose } from "recompose";
import { withAuthentication } from "components/shared/Session";

const QuestionEdit = ({ authUser, firebase, history, match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState();
  const [snackbarProps, setSnackbarProps] = useState(null);

  const viewQuestion = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    const id = match.params.questionId;
    setIsLoading(true);
    const unsubscribe = firebase
      .getCollectionById(`courses/${match.params.collection}/questions`, id)
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          const question = [];
          snapshot.forEach(doc =>
            question.push({ ...doc.data(), uid: doc.id })
          );
          try {
            /* Questions can contain special JSON characters that needs to be parsed */
            setQuestion({
              ...question[0],
              question: JSON.parse(question[0].question)
            });
          } catch {
            setQuestion(question[0]);
          }
        } else if (id === "new") {
          setQuestion({
            title: "Title goes here",
            label: "Subtitle goes here",
            question: "<h1>Question goes here</h1>",
            answer: "<h1>Answer goes here🎉</h1>",
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

  if (!match.params && !question) {
    return;
  }

  return (
    <Suspense fallback={<MoSpinner isLoading color="primary" />}>
      <QuestionForm
        isLoading={isLoading}
        isCard={false}
        firebase={firebase}
        title={question?.title}
        label={question?.label}
        match={match}
        question={question}
        setQuestion={e => setQuestion(e)}
        subtitle={question?.subtitle}
        setSnackbarProps={snackbarProps => setSnackbarProps(snackbarProps)}
        viewQuestion={() => viewQuestion()}
      />
      {!isLoading && (
        <>
          {snackbarProps && (
            <MoSnackbar
              authUser={authUser}
              snackbarProps={snackbarProps}
              handleClick={() => viewQuestion()}
            />
          )}
        </>
      )}
    </Suspense>
  );
};

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withAuthentication,
  withAuthorization(condition)
)(QuestionEdit);
