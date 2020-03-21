import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const MoScoreBoard = ({ numberOfQuestions, points }) => (
	<ButtonGroup
		variant="text"
		color="default"
		aria-label="Points and progress"
	>
		<Button> {points ? `${points} Points` : "0 Points"}</Button>
        <Button>{numberOfQuestions ? Math.round(points / numberOfQuestions * 100) + "%" : "..."}</Button>
	</ButtonGroup>
);

export default MoScoreBoard;
