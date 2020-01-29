import React from 'react';

import List from "@material-ui/core/List";

import QuestionItem from './QuestionItem';

const QuestionList = ({
  authUser,
  questions,
  onEditQuestion,
  onRemoveQuestion,
}) => (
  <List>
    {questions.map(question => (
      <QuestionItem
        authUser={authUser}
        key={question.uid}
        question={question}
        onEditQuestion={onEditQuestion}
        onRemoveQuestion={onRemoveQuestion}
      />
    ))}
  </List>
);

export default QuestionList;
