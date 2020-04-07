import React, { useState, useEffect } from "react";

import * as ROUTES from "../../../constants/routes";
import { AuthUserContext } from "../../../components/Session";
import Spinner from "../../../components/shared/Spinner";
import { withFirebase } from "../../../components/Firebase";
import QuestionsTable from "./QuestionsTable";

const Questions = ({ firebase, history, match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setQuestions(null);
    const getQuestions = firebase
      .collection("collections")
      .doc(match.params.collection)
      .collection("questions")
      .orderBy("id")
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let questions = [];
          snapshot.forEach(doc =>
            questions.push({ ...doc.data(), uid: doc.id })
          );
          setQuestions(questions);
        } else {
          setQuestions(null);
        }
        setIsLoading(false);
      });

    return () => getQuestions();
  }, [firebase, match]);

  const onCreateQuestion = (event, authUser) => {
    if (event.label) {
      firebase.createQuestionById(match.params.collection, {
        ...event,
        id: Number(event.id),
        userId: authUser.uid,
        createdAt: firebase.fieldValue.serverTimestamp()
      });
    }
  };

  const onEditQuestion = event => {
    if (!match.params.collection) {
      return;
    }

    firebase
      .doc("collections/" + match.params.collection + "/questions", event.uid)
      .update({
        ...event,
        id: Number(event.id),
        editedAt: firebase.fieldValue.serverTimestamp()
      });
  };

  const onRemoveQuestion = uid => {
    firebase
      .doc("collections/" + match.params.collection + "/questions", uid)
      .delete();
  };

  const handleRowClick = id => {
    history.push(ROUTES.QUESTIONS.path + "/" + id);
  };

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <>
          {isLoading && <Spinner isLoading={isLoading} />}

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
