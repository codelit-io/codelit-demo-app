import React from "react";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const Content = ({ classes, content }) => (
	<Grid container spacing={4}>
		<Grid item md={12}>
			<Card className={classes.card}>
				<Typography variant="h6" gutterBottom className={classes.content}>
					<Box fontWeight="fontWeightLight">{content}</Box>
				</Typography>
			</Card>
		</Grid>
	</Grid>
);

export default withStyles(styles)(Content);
