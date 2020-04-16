import React from "react";

import CourseCategory from "./CourseCategory";
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
      : `courses/${question.doc}`;

    return (
      <React.Fragment key={index}>
        {question.category && (
          <CourseCategory category={question.category} index={index} />
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
