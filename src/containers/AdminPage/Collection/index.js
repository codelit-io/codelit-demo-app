import React, { useState, useEffect } from "react";

import * as ROUTES from "constants/routes";
import { AuthUserContext } from "components/shared/Session";
import MoSpinner from "components/library/MoSpinner";
import { withFirebase } from "components/shared/Firebase";
import QuestionsTable from "./CollectionTable";

const Collection = ({ firebase, history, match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setQuestions(null);
    const getQuestions = firebase
      .collection("courses")
      .doc(match.params.collection)
      .collection("questions")
      .orderBy("id")
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          let questions = [];
          snapshot.forEach((doc) => {
            let data = { ...doc.data() };
            let question;
            try {
              /* Questions can contain special JSON characters that needs to be parsed */
              question = JSON.parse(data.question);
            } catch {
              console.log("String can't be parsed");
            }
            questions.push({
              ...doc.data(),
              uid: doc.id,
              question,
            });
          });
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
        createdAt: firebase.fieldValue.serverTimestamp(),
        question: escapeCode(event.question),
      });
    }
  };

  const onEditQuestion = (event) => {
    if (!match.params.collection) {
      return;
    }
    firebase
      .doc("courses/" + match.params.collection + "/questions", event.uid)
      .update({
        ...event,
        id: Number(event.id),
        editedAt: firebase.fieldValue.serverTimestamp(),
        question: escapeCode(event.question),
      });
  };

  const onRemoveQuestion = (uid) => {
    firebase
      .doc("courses/" + match.params.collection + "/questions", uid)
      .delete();
  };

  const handleRowClick = (id) => {
    history.push(
      ROUTES.COLLECTIONS.path + "/" + match.params.collection + "/" + id
    );
  };

  const escapeCode = (code) => {
    return JSON.stringify(code, null, 2);
  };

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <>
          {isLoading && <MoSpinner isLoading={isLoading} />}

          {questions && (
            <QuestionsTable
              questions={questions}
              onEditQuestion={onEditQuestion}
              onRemoveQuestion={onRemoveQuestion}
              onCreateQuestion={(event) => onCreateQuestion(event, authUser)}
              handleRowClick={handleRowClick}
            />
          )}
        </>
      )}
    </AuthUserContext.Consumer>
  );
};

export default withFirebase(Collection);
