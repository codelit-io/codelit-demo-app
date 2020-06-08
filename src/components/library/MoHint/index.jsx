import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Fade from "@material-ui/core/Fade";

const MoHint = ({ classes, text }) => (
	<Fade timeout={{ enter: 800, exit: 800 }} in={text && true}>
		<div className={classes.container}>
			<Typography variant="h6" className={classes.text}>
				<Box fontWeight="fontWeightLight" color="primary">
					{text}
				</Box>
			</Typography>
		</div>
	</Fade>
);

export default withStyles(styles)(MoHint);
