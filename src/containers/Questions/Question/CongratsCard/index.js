import React from "react";

import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import MoSnackbar from "../../../../components/shared/MoSnackBar";

const CongratsCardBase = ({ isActive, classes, triggerNextQuestion }) => {
	return (
		<MoSnackbar
			isActive={isActive}
			handleClick={() => triggerNextQuestion()}
		></MoSnackbar>
	);
};

const CongratsCard = React.memo(CongratsCardBase);

export default withStyles(styles)(CongratsCard);
