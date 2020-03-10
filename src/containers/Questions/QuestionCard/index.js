import React from "react";

import Grid from "@material-ui/core/Grid";
import MoCard from "../../../components/shared/MoCard";
import Title from "../../../components/shared/Title";

const QuestionCard = ({ question, userPoints, key }) => (
	<>
		{question.category && (
			<Grid item xs={12} sm={12} md={12}>
				<Title
					text={question.category}
					fade={true}
					margin="40px 0 0 0"
					width="100%"
				></Title>
			</Grid>
		)}
		<Grid item xs={12} sm={6} md={6}>
			<MoCard userPoints={userPoints} item={question}></MoCard>
		</Grid>
	</>
);

export default QuestionCard;
