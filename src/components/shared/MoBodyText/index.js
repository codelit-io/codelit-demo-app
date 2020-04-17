import React from "react";

import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

const MoBodyText = ({ subtitle, children }) => (
	<Fade timeout={{ enter: 800 }} in={subtitle || (children && true)}>
		<Typography
			variant="body1"
			style={{ paddingLeft: "4px", color: "#484848" }}
		>
			{subtitle}
			{children}
		</Typography>
	</Fade>
);

export default MoBodyText;
