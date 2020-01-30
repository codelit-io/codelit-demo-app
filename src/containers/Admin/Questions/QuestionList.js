import React from "react";

import QuestionItem from "./QuestionItem";
import TableRow from "@material-ui/core/TableRow";

const QuestionList = ({
	authUser,
	questions,
	onEditQuestion,
	onRemoveQuestion
}) =>
	questions.map(question => (
		<TableRow hover>
			<QuestionItem
				authUser={authUser}
				key={question.uid}
				question={question}
				onEditQuestion={onEditQuestion}
				onRemoveQuestion={onRemoveQuestion}
			/>
		</TableRow>
	));

export default QuestionList;
