import React, { useState, useEffect } from "react";

import * as ROUTES from "../../../constants/routes";
import { AuthUserContext } from "../../../components/Session";
import Spinner from "../../../components/shared/Spinner";
import { withFirebase } from "../../../components/Firebase";
import QuestionsTable from "./QuestionsTable";

const Questions = ({ firebase, history }) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = firebase.questions().onSnapshot(snapshot => {
      if (snapshot.size) {
        let questions = [];
        snapshot.forEach(doc => questions.push({ ...doc.data(), uid: doc.id }));
        setQuestions(questions);
      } else {
        setQuestions(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [firebase]);

  const stringifyQuestionFromEvent = event => {
    return {
      ...event,
      question: JSON.stringify(event.question, null, 2)
    };
  };

  const onCreateQuestion = (event, authUser) => {
    if (event.label) {
      const question = stringifyQuestionFromEvent(event);

      firebase.createQuestionById({
        ...question,
        id: Number(event.id),
        userId: authUser.uid,
        createdAt: firebase.fieldValue.serverTimestamp()
      });
    }
  };

  const onEditQuestion = event => {
	  debugger
	const question = stringifyQuestionFromEvent(event);
    firebase.question(event.uid).update({
      ...question,
      editedAt: firebase.fieldValue.serverTimestamp()
    });
  };

  const onRemoveQuestion = uid => {
    firebase.question(uid).delete();
  };

  const handleRowClick = id => {
    history.push(ROUTES.QUESTIONS.path + "/" + id);
  };

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <>
          {loading && <Spinner loading={loading} />}

          {questions && (
            <QuestionsTable
              questions={questions}
              onEditQuestion={onEditQuestion}
              onRemoveQuestion={onRemoveQuestion}
              onCreateQuestion={event => onCreateQuestion(event, authUser)}
              handleRowClick={handleRowClick}
            />
          )}
        </>
      )}
    </AuthUserContext.Consumer>
  );
};

export default withFirebase(Questions);
