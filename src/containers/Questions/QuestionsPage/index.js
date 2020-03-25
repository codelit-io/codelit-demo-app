import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import QuestionsList from "./QuestionsList";
import MoPage from "../../../components/shared/MoPage";

const QuestionsPage = ({ authUser, configs, firebase, match }) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getQuestions = firebase
      .collection(match.params.collection)
      .orderBy("id")
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let questions = [];
          snapshot.forEach(doc => {
            questions.push({
              ...doc.data(),
              uid: doc.id
            });
          });

          setQuestions(questions);
          setLoading(false);
        } else {
          setQuestions([]);
          setLoading(false);
        }
      });
    /* Unsubscribe from firebase on unmount */
    return () => {
      setQuestions([]);
      getQuestions();
    };
  }, [firebase, match]);

  return (
    <MoPage
      title={configs.label}
      points={authUser && authUser.points}
      loading={loading}
      numberOfQuestions={questions.length}
      isScoreBoard={configs && true}
    >
      {questions && (
        <Grid container spacing={4}>
          <QuestionsList
            authUser={authUser}
            questions={questions}
            configs={configs}
          />
        </Grid>
      )}
    </MoPage>
  );
};

export default QuestionsPage;
