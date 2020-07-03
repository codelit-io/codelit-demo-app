/**
 * Displays subtitles for all pages
 * @param {any || Component} children - Passed from parent container and has everything about the logged in user
 * @param {Boolean} isAdmin - Admin flag to display extra protected info
 * @param {String} text - Text displayed for the subtitle
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Number} margin - optional -Margin for this component
 * @param {String} textAlign - optional - Alignment of text, left, right or center
 * @param {Number} width - optional - Width of the subtitle
 */

import React from "react";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const MoPageSubtitle = ({ children, classes, text }) => {
	return (
		<Fade
			in={(text || children) && true}
			mountOnEnter
			timeout={{ enter: 200, exit: 800 }}
			unmountOnExit
		>
			<Typography variant="h4">
				<Box fontWeight="fontWeightLight" className={classes.text}>
					{text} {children}
				</Box>
			</Typography>
		</Fade>
	);
};

export default withStyles(styles)(MoPageSubtitle);
