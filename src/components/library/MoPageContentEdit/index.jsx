import React from "react";

import Fade from "@material-ui/core/Fade";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const MoPageContentEdit = ({ classes, children, text, name, register }) => {
	return (
		<Fade
			in={(text || children) && true}
			mountOnEnter
			timeout={{ enter: 200 }}
			unmountOnExit
		>
			<input
				className={`${classes.text} MuiTypography-h6`}
				name={name}
				placeholder={text || children}
				defaultValue={text || children}
				ref={register}
			/>
		</Fade>
	);
};

export default withStyles(styles)(MoPageContentEdit);
