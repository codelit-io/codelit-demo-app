import React, { lazy } from "react";

const QuestionCard = lazy(() => import("./QuestionCard"));
const QuestionCategory = lazy(() => import("./QuestionCategory"));

const QuestionsList = ({ authUser, questions, configs }) =>
	questions.map((question, index) => (
		<React.Fragment key={index}>
			{question.category && (
				<QuestionCategory category={question.category} index={index} />
			)}
			<QuestionCard
				userPoints={authUser && authUser.points}
				question={question}
				url={configs.slug}
			/>
		</React.Fragment>
	));

export default QuestionsList;
