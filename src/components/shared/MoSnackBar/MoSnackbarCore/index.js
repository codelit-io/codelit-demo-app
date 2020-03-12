import React from "react";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Button from "@material-ui/core/Button";
import MoTitle from "../../MoTitle";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoSnackbarCore = ({
	isActive,
	handleClick,
	snackbarProps,
	authUser,
	classes
}) => {
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
				message={
					<div className={classes.message}>
						<CheckCircleIcon className={classes.checkIcon} />
						<MoTitle
							
							text={snackbarProps && snackbarProps.title}
							fade={true}
							margin={false}
						/>
					</div>
				}
				className={classes.snackbarContent}
				action={
					<Button onClick={() => handleButtonClick()}>
						{snackbarProps && snackbarProps.buttonText}
						{snackbarProps && snackbarProps.buttonIcon}
					</Button>
				}
			></SnackbarContent>
		</Snackbar>
	);
};

export default withStyles(styles)(MoSnackbarCore);
