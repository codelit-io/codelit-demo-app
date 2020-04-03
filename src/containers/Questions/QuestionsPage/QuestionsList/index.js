import React from "react";

import QuestionCategory from "./QuestionCategory";
import QuestionCard from "./QuestionCard";

const QuestionsList = ({ configs, questions, points }) =>
  questions.map((question, index) => {
    const isDisabled = points
      ? points < Number(question.id) - 1 && Number(question.id) !== 1
      : Number(question.id) !== 1;

    return (
      <React.Fragment key={index}>
        {question.category && (
          <QuestionCategory category={question.category} index={index} />
        )}
        <QuestionCard
          isDisabled={isDisabled}
          points={points}
          question={question}
          url={configs.collection}
        />
      </React.Fragment>
    );
  });

export default QuestionsList;
