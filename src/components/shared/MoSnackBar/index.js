import React from "react";

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";

const MoSnackbar = ({ isActive, handleClick }) => {
	const [state, setState] = React.useState({
		isActive: isActive,
		Transition: Slide
	});

	const handleButtonClick = () => {
		setState({
			isActive: false,
			Transition: Slide
		});
		handleClick();
	};

	const handleClose = () => {
		setState({
			...state,
			isActive: false
		});
	};

	return (
		<Snackbar
			open={isActive}
			onClose={handleClose}
			TransitionComponent={state.Transition}
            message="👏Great work!👏"
			action={
				<Button
					style={{ color: "white" }}
					onClick={() => handleButtonClick()}
				>
					Next Question <ArrowForwardIcon />
				</Button>
			}
		/>
	);
};

export default MoSnackbar;
