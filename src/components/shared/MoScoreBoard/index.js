import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";

const MoScoreBoard = ({ numberOfQuestions, points }) => (
	<Slide
		direction="left"
		in={numberOfQuestions ? true : false}
		mountOnEnter
		timeout={{ enter: 800, exit: 400 }}
		unmountOnExit
	>
		<ButtonGroup
			variant="text"
			color="default"
			aria-label="Points and progress"
		>
			<Button> {points ? `${points} Points` : "0 Points"}</Button>
			<Button>
				{numberOfQuestions
					? Math.round((points / numberOfQuestions) * 100) + "% Complete"
					: "..."}
			</Button>
		</ButtonGroup>
	</Slide>
);

export default MoScoreBoard;
