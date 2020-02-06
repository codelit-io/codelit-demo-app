import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoButton = ({ classes, handleClick, href, text }) => {
	return (
		<Button
			color="primary"
			className={classes.button}
			href={href}
			onClick={() => (href ? "" : handleClick())}
			variant="contained"
		>
			{text} <ArrowForwardIcon />
		</Button>
	);
};

export default withStyles(styles)(MoButton);
