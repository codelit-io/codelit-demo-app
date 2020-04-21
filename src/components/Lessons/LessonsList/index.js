import React from "react";

import LessonCategory from "./LessonCategory";
import LessonCard from "./LessonCard";

const LessonsList = ({ url, questions, points }) => {
  return questions.map((question, index) => {
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
          <LessonCategory category={question.category} index={index} />
        )}
        <LessonCard
          isDisabled={isDisabled}
          points={points}
          item={question}
          url={configureUrl}
        />
      </React.Fragment>
    );
  });
};

export default LessonsList;
