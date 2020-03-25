import React from "react";

import QuestionCategory from "./QuestionCategory";
import QuestionCard from "./QuestionCard";

const QuestionsList = ({ authUser, questions, configs }) =>
  questions.map((question, index) => (
    <React.Fragment key={index}>
      {question.category && (
        <QuestionCategory category={question.category} index={index} />
      )}
      <QuestionCard
        userPoints={authUser && authUser.points}
        question={question}
        url={configs.collection}
      />
    </React.Fragment>
  ));

export default QuestionsList;
