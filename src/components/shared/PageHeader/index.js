import React from "react";
import { Typography, Box } from "@material-ui/core";

const PageHeader = ({ title }) => {
	return (
		<Typography variant="h4" gutterBottom style={{ marginBottom: "40px", color: "#383c40" }}>
			<Box fontWeight="fontWeightLight">{title}</Box>
		</Typography>
	);
};

export default PageHeader;
