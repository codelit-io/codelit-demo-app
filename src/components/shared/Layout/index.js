import React from "react";
import Grid from "@material-ui/core/Grid";

const withLayout = Component => ({ rows, cols }) => {
	return (
		<Grid item sm={12} md={6}>
			<Component />
		</Grid>
	);
};

export default withLayout;
