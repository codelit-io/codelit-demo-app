import React from "react";

import Fade from "@material-ui/core/Fade";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoPageHeaderEdit = ({ children, classes, title }) => {
	return (
		<Fade in={(title || children) && true} timeout={{ enter: 800 }}>
			<input
				className={`${classes.title} MuiTypography-h2`}
				placeholder={title || children}
			/>
		</Fade>
	);
};

export default withStyles(styles)(MoPageHeaderEdit);
