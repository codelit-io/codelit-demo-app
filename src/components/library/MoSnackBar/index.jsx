/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Snackbar Component 🍿
 *
 * Message snackbar notification, with click handlers and customizable text and Icon
 *
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
 * @param {CallableFunction} handleClick - Callback function when clicking the snackbar button
 * @param {Boolean} isActive - Flag to trigger the snackbar
 * @param {Object} snackbarProps - Contains snackbar title and button text. eg {title: string, buttonText: string, buttonIcon: React Element/Component}
 * @withStyle - HOC provides classes object to component for styling
 *
 * @see See [Material IU Snackbar](https://material-ui.com/components/snackbars/#snackbar)
 * */

import React from "react";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import MoTitle from "components/library/MoTitle";
import withStyles from "@material-ui/core/styles/withStyles";
import MoButton from "components/library/MoButton";
import styles from "./styles";

const MoSnackBar = ({
	authUser,
	classes,
	handleClick,
	isActive,
	snackbarProps
}) => {
	const [state, setState] = React.useState({
		isActive,
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
			Transition: Slide,
			isActive: false
		});
	};

	return (
		<Snackbar
			open={isActive}
			onClose={handleClose}
			TransitionComponent={state.Transition}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
		>
			<SnackbarContent
				message={
					<div className={classes.message}>
						<CheckCircleIcon className={classes.checkIcon} />
						<MoTitle
							text={snackbarProps && snackbarProps.title}
							fade
							margin="0 36px 0 0"
						/>
					</div>
				}
				className={classes.snackbarContent}
				action={
					<MoButton handleButtonClick={() => handleButtonClick()} text="Next">
						{snackbarProps && snackbarProps.buttonText}
						{snackbarProps && snackbarProps.buttonIcon}
					</MoButton>
				}
			/>
		</Snackbar>
	);
};

export default withStyles(styles)(MoSnackBar);
