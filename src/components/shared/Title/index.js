import React from "react";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

const Title = ({ text, fade, margin, textAlign, width }) => {
	const styles = {
		text: {
			color: "#383c40",
			verticalAlign: "middle",
			textDecoration: "none",
			textAlign: textAlign ? textAlign : "center",
			margin: margin ? margin : ""
		},
		container: {
			width: width ? width : ""
		}
	};

	return (
		<Fade in={fade} timeout={{ enter: 1000 }}>
			<Typography variant="h6" style={styles.container}>
				<Box fontWeight="fontWeightLight" style={styles.text}>
					{text}
				</Box>
			</Typography>
		</Fade>
	);
};

export default Title;
