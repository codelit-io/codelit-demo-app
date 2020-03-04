import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Button from "@material-ui/core/Button";
import Title from "../Title";

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
		>
			<SnackbarContent
				message={<Title text="👏Great work!👏" fade={true} margin={false} />}
				style={{
					backgroundColor: "white",
                    color: "black",
                    padding: "2em",
					boxShadow:
						"0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)"
				}}
				action={
					<Button onClick={() => handleButtonClick()}>
						Next Question <ArrowForwardIcon />
					</Button>
				}
			></SnackbarContent>
		</Snackbar>
	);
};

export default MoSnackbar;
