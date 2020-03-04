import React from "react";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

const Title = ({ text, fade, margin }) => {
	const classes = {
		text: {
			color: "#383c40",
			textTransform: "capitalize",
			verticalAlign: "middle",
			textDecoration: "none",
			textAlign: "center",
			marginBottom: margin ? "40px" : "0px"
		},
	};

	return (
		<Fade in={fade} timeout={{ enter: 1000 }}>
			<Typography variant="h6">
				<Box fontWeight="fontWeightLight" style={classes.text}>
					{text}
				</Box>
			</Typography>
		</Fade>
	);
};

export default Title;
