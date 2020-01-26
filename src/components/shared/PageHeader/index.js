import React from "react";

import * as ROUTES from "../../../constants/routes";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const PageHeader = ({
	classes,
	course,
	history,
	subTopic,
	title,
	topic
}) => {
	return (
		<Fade in={true} timeout={{ enter: 1000 }}>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={12} md={4} className={classes.arrowSection}>
					{history && history.location.pathname !== "/" && (
						<IconButton aria-label="delete" onClick={() => history.goBack()}>
							<ArrowBackIcon className={classes.arrow} />
						</IconButton>
					)}
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<Typography variant="h4" gutterBottom className={classes.header}>
						<Box fontWeight="fontWeightLight" className={classes.linkText}>
							<Link
								to={`${ROUTES.LEARN.path}/${course}`}
								className={classes.linkText}
							>
								{course && <span>{course}</span>}
							</Link>
							<Link
								to={`${ROUTES.LEARN.path}/${course}/${topic}`}
								className={classes.linkText}
							>
								{topic && <span>&nbsp;/&nbsp;{topic}</span>}
							</Link>
							<Link
								className={classes.linkText}
								to={`${ROUTES.LEARN.path}/${course}/${topic}/${subTopic}`}
							>
								{subTopic && (
									<span>&nbsp;/&nbsp;{subTopic.replace(/-/g, " ")}</span>
								)}
							</Link>
							{title}
						</Box>
					</Typography>
				</Grid>
			</Grid>
		</Fade>
	);
};

export default withStyles(styles)(PageHeader);
