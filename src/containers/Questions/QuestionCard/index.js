import React from "react";

import Grid from "@material-ui/core/Grid";
import MoCard from "../../../components/shared/MoCard";

const QuestionCard = ({ index, question, userPoints }) => (
	<Grid item xs={12} sm={6} md={3}>
		<MoCard userPoints={userPoints} item={question}></MoCard>
	</Grid>
);

export default QuestionCard;
