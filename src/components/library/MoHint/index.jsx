/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Hint Component
 *
 * Small hint text used in QuestionPage Component as a hint for questions
 *
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
 * @param {Object} children - Child components that are being wrapped by this component
 * @param {Object} text - Child components that are being wrapped by this component
 *
 *
 * */
import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Fade from "@material-ui/core/Fade";
import styles from "./styles";

const MoHint = ({ classes, children, text }) => (
	<Fade
		timeout={{ enter: 400, exit: 1200 }}
		mountOnEnter
		in={text && true}
		unmountOnExit
	>
		<div className={classes.container}>
			<Typography variant="h6" className={classes.text}>
				<Box fontWeight="fontWeightLight" color="primary">
					{text || children}
				</Box>
			</Typography>
		</div>
	</Fade>
);

export default withStyles(styles)(MoHint);
