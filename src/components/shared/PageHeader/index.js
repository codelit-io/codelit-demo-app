import React from "react";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const PageHeader = ({ classes, title }) => {
	return (
		<Fade in={title && true} timeout={{ enter: 1000 }}>
			<Typography variant="h2" gutterBottom>
				<Box fontWeight="fontWeightLight" className={classes.linkText}>
					{title}
				</Box>
			</Typography>
		</Fade>
	);
};

export default withStyles(styles)(PageHeader);
