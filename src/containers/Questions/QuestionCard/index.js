import React from "react";

import Grid from "@material-ui/core/Grid";
import MoCard from "../../../components/shared/MoCard";
import MoTitle from "../../../components/shared/MoTitle";

const QuestionCard = ({ index, question, userPoints }) => (
	<>
		{question.category && (
			<Grid item xs={12} sm={12} md={12}>
				<MoTitle
					text={question.category}
					fade={true}
					margin={index === 0 ? "36px 0 26px" : "40px 0 36px" }
					width="100%"
				></MoTitle>
			</Grid>
		)}
		<Grid item xs={12} sm={6} md={6}>
			<MoCard userPoints={userPoints} item={question}></MoCard>
		</Grid>
	</>
);

export default QuestionCard;
