import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import QuestionsList from "./QuestionsList";
import MoPage from "../../../components/shared/MoPage";
import MoScoreBoard from "../../../components/shared/MoScoreBoard";

const QuestionsPage = ({ authUser, configs, firebase, match }) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);

  const calculateProgress = () => {
    if (!authUser) {
      return false;
    }
    let numberOfQuestions = questions.length;
    return numberOfQuestions && points
      ? Math.round((points / numberOfQuestions) * 100) + "% Complete"
      : "0% Complete";
  };

  useEffect(() => {
    setLoading(true);

    setPoints(authUser?.reports?.[match.params.collection]?.points);
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
  }, [authUser, firebase, match]);

  return (
    <MoPage
      title={configs.label}
      loading={loading}
      Component={() => (
        <MoScoreBoard
          authUser={authUser}
          points={points}
          progress={calculateProgress()}
        />
      )}
    >
      {questions && (
        <Grid container spacing={4}>
          <QuestionsList
            points={points}
            questions={questions}
            configs={configs}
          />
        </Grid>
      )}
    </MoPage>
  );
};

export default QuestionsPage;
