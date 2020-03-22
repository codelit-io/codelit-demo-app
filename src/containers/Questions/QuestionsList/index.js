import React from "react";

import QuestionCard from "./QuestionCard";
import QuestionCategory from "./QuestionCategory";

const QuestionsList = ({ authUser, questions, configs }) => {
  let url = configs.slug;
  return questions.map((question, index) => (
    <React.Fragment key={index}>
      {question.category && (
        <QuestionCategory category={question.category} index={index} />
      )}
      <QuestionCard
        userPoints={authUser && authUser.points}
        question={question}
        url={url}
      />
    </React.Fragment>
  ));
};

export default QuestionsList;
