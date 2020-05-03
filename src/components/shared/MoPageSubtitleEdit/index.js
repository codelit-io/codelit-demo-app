import React from "react";

import Fade from "@material-ui/core/Fade";

const MoPageSubtitleEdit = ({
	children,
	subtitle,
	margin,
	textAlign,
	width,
}) => {
	const styles = {
		text: {
			color: "#383c40",
			verticalAlign: "middle",
			textDecoration: "none",
			textAlign: textAlign ? textAlign : "",
			margin: margin ? margin : "",
			width: "100%",
			border: "none"
		},
		container: {
			width: width ? width : "",
		},
	};

	return (
		<Fade in={true} timeout={{ enter: 800 }}>
			<div style={styles.container}>
				<input
					style={styles.text}
					className="MuiTypography-h4"
					placeholder={subtitle || children}
				/>
			</div>
		</Fade>
	);
};

export default MoPageSubtitleEdit;
