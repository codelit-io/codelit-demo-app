import React from "react";

import MoCard from "../../../../../components/shared/MoCard";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const QuestionCard = ({ classes, isDisabled, question, points, url }) => (
	<div className={classes.padding}>
		<MoCard
			isDisabled={isDisabled}
			points={points}
			item={question}
			url={url}
		></MoCard>
	</div>
);

export default withStyles(styles)(QuestionCard);
