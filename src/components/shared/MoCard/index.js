import React from "react";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from "@material-ui/core";

import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const MoCard = ({ item, isDisabled, classes, url }) => (
	<Link to={url} className={isDisabled ? classes.disableLink : classes.link}>
		<div className={`${classes.card} ${isDisabled && classes.disableCard}`}>
			{isDisabled && <LockIcon className={classes.lockIcon} />}
			<Grid container spacing={4} className={classes.content}>
				<Grid item className={classes.cardContent} xm={2} sm={2} md={2} lg={2}>
					<SportsEsportsIcon className={classes.heroIcon}/>
				</Grid>
				<Grid
					item
					className={classes.cardContent}
					xm={10}
					sm={10}
					md={10}
					lg={10}
				>
					<Typography gutterBottom variant="h5" component="h2">
						{item.label ? item.item || item.topic || item.label : "No Name"}
					</Typography>
					<Typography variant="overline" gutterBottom>
						{item.desc || item.language}
					</Typography>
				</Grid>
			</Grid>
		</div>
	</Link>
);

export default withStyles(styles)(MoCard);
