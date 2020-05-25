import React, { useState, useEffect, useCallback } from "react";

import { AuthUserContext } from "components/shared/Session";
import MoSpinner from "components/library/MoSpinner";
import { withFirebase } from "components/shared/Firebase";
import QuestionsTable from "./CollectionTable";
import {
  createQuestion,
  editQuestion,
  removeQuestion,
  rowClick,
} from "utils/questionFirebase";
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

  const onCreateQuestion = useCallback(
    (event, authUser) => {
      createQuestion(authUser, event, firebase, match);
    },
    [firebase, match]
  );

  const onEditQuestion = useCallback(
    (event) => {
      editQuestion(event, firebase, match);
    },
    [firebase, match]
  );

  const onRemoveQuestion = useCallback(
    (id) => {
      removeQuestion(id, firebase, match);
    },
    [firebase, match]
  );

  const handleRowClick = useCallback(
    (id) => {
      rowClick(id, history, match);
    },
    [history, match]
  );

  if (isLoading || !questions) {
    return <MoSpinner isLoading={isLoading} />;
  }

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <QuestionsTable
          questions={questions}
          onEditQuestion={(event) => onEditQuestion(event)}
          onRemoveQuestion={(id) => onRemoveQuestion(id)}
          onCreateQuestion={(event) => onCreateQuestion(event, authUser)}
          handleRowClick={(id) => handleRowClick(id)}
        />
      )}
    </AuthUserContext.Consumer>
  );
};

export default withFirebase(Collection);
