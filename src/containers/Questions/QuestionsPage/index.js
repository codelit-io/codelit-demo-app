import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import QuestionsList from "./QuestionsList";
import MoPage from "../../../components/shared/MoPage";
import MoScoreBoard from "../../../components/shared/MoScoreBoard";

const QuestionsPage = ({
  authUser,
  loading,
  match,
  questions,
  topicDetails
}) => {
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
    setPoints(authUser?.reports?.[match.params.collection]?.points);
  }, [authUser, match]);

  return (
    <MoPage
      title={topicDetails.label}
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
            url={match.params.collection}
          />
        </Grid>
      )}
    </MoPage>
  );
};

export default QuestionsPage;
