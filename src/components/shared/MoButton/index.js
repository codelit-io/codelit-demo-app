import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoButton = ({ classes, handleClick, href, text }) => {
	return (
		<Link to={href ? href : "#"} style={{textDecoration:"none"}}>
			<Button
				color="primary"
				className={classes.button}
				onClick={() => (href ? "" : handleClick())}
				variant="contained"
			>
				{text}
				<ArrowForwardIcon />
			</Button>
		</Link>
	);
};

export default withStyles(styles)(MoButton);
