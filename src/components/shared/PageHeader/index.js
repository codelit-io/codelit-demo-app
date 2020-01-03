import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import useStyles from "./styles";

const PageHeader = ({ title, course }) => {
	const classes = useStyles();
	return (
		<Typography
			variant="h4"
			gutterBottom
			className={classes.header}
		>
			<Box fontWeight="fontWeightLight" className={classes.linkText}>
				<Link
					to={`${ROUTES.LEARN.path}/${course}`}
					className={classes.linkText}
				>
					{course && <span>{course} / </span>}
				</Link>{" "}
				{title}
			</Box>
		</Typography>
	);
};

export default PageHeader;
