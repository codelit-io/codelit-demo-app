import React from "react";

import QuestionCategory from "./QuestionCategory";
import QuestionCard from "./QuestionCard";

const QuestionsList = ({ url, questions, points }) =>
  questions.map((question, index) => {
    /* isDisabled is configured based on points and question's id */
    const isDisabled = url
      ? points
        ? points < Number(question.id) - 1 && Number(question.id) !== 1
        : Number(question.id) !== 1
      : false;

    /* Configure url route for each item */
    const configureUrl = isDisabled
      ? ""
      : url
      ? `${url}/${question.id}`
      : `collections/${question.id}`;

    return (
      <React.Fragment key={index}>
        {question.category && (
          <QuestionCategory category={question.category} index={index} />
        )}
        <QuestionCard
          isDisabled={isDisabled}
          points={points}
          question={question}
          url={configureUrl}
        />
      </React.Fragment>
    );
  });

export default QuestionsList;
