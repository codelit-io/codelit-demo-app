import React, { useEffect, useState, useCallback } from "react";

import Grid from "@material-ui/core/Grid";
import QuestionsList from "./QuestionsList";
import MoPage from "../../../components/shared/MoPage";
import MoScoreBoard from "../../../components/shared/MoScoreBoard";
import QuestionCard from "./QuestionsList/QuestionCard";

const QuestionsPage = ({
  authUser,
  isLoading,
  match,
  questions,
  topicDetails
}) => {
  const [points, setPoints] = useState(0);
  const calculateProgress = useCallback(() => {
    if (!authUser) {
      return false;
    }
    let numberOfQuestions = questions && questions.length;
    return numberOfQuestions && points
      ? Math.round((points / numberOfQuestions) * 100) + "% Complete"
      : "0% Complete";
  }, [authUser, points, questions]);

  useEffect(() => {
    setPoints(authUser?.reports?.[match.params.collection]?.points);
  }, [authUser, match]);

  return (
    <MoPage
      title={topicDetails.label}
      isLoading={isLoading}
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
          <QuestionCard
            isDisabled={false}
            points={points}
            question={{ label: "Add New Course", desc: "Get Started" }}
            url={`collections/add`}
          />
        </Grid>
      )}
    </MoPage>
  );
};

export default QuestionsPage;
