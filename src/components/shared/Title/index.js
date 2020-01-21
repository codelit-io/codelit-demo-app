import React from "react";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

const classes = {
	text: {
		color: "#383c40",
		textTransform: "capitalize",
		verticalAlign: "middle",
		textDecoration: "none",
		textAlign: "center",
		marginBottom: "40px",
	}
};

const Title = ({ text, fade }) => {
	return (
		<Fade in={fade} timeout={{ enter: 1000 }}>
			<Typography variant="h6" gutterBottom>
				<Box fontWeight="fontWeightLight" style={classes.text}>
					{text}
				</Box>
			</Typography>
		</Fade>
	);
};

export default Title;
