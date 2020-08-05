import React, { useState, useEffect, useCallback } from "react";

import MoSpinner from "components/library/MoSpinner";
import QuestionsTable from "./CollectionTable";
import {
  createQuestion,
  updateQuestion,
  removeQuestion,
  rowClick
} from "helpers/collectionFirebase";
import useGlobal from "store";

const Collection = ({ history, match }) => {
  const [{ authUser, firebase }] = useGlobal();

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
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let questions = [];
          snapshot.forEach(doc => {
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
              question
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

  const onUpdateQuestion = useCallback(
    event => {
      updateQuestion(event, firebase, match);
    },
    [firebase, match]
  );

  const onRemoveQuestion = useCallback(
    id => {
      removeQuestion(id, firebase, match);
    },
    [firebase, match]
  );

  const handleRowClick = useCallback(
    id => {
      rowClick(id, history, match);
    },
    [history, match]
  );

  if (isLoading || !questions) {
    return <MoSpinner isLoading={isLoading} />;
  }

  return (
    <QuestionsTable
      questions={questions}
      onUpdateQuestion={event => onUpdateQuestion(event)}
      onRemoveQuestion={id => onRemoveQuestion(id)}
      onCreateQuestion={event => onCreateQuestion(event, authUser)}
      handleRowClick={id => handleRowClick(id)}
    />
  );
};

export default Collection;
