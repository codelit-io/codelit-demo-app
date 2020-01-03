import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import useStyles from "./styles";

const PageHeader = ({ title, course }) => {
	const classes = useStyles();
	return (
		<Fade in={true} timeout={{ enter: 1000 }}>
			<Typography variant="h4" gutterBottom className={classes.header}>
				<Box fontWeight="fontWeightLight" className={classes.linkText}>
					<Link to={`${ROUTES.LEARN.path}/${course}`} className={classes.linkText}>
						{course && <span>{course} / </span>}
					</Link>{" "}
					{title}
				</Box>
			</Typography>
		</Fade>
	);
};

export default PageHeader;
