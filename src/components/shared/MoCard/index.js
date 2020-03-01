import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import styles from "./styles";
import Fade from "@material-ui/core/Fade";
import LockIcon from "@material-ui/icons/Lock";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import withStyles from "@material-ui/core/styles/withStyles";

const MoCard = ({ item, icon, classes, userLevel }) => {
	const disable = userLevel <= Number(item.id) && Number(item.id) !== 0;
	return (
		<Link
			to={(item && item.url) || (item && `questions/${item.id}`) || ""}
			className={item && disable ? classes.disableLink : classes.link}
		>
			<Fade timeout={{ enter: 800 }} in={true}>
				<Card
					className={`${classes.card} ${item &&
						disable &&
						classes.disableCard}`}
				>
					<CardActionArea className={classes.content}>
						{item && disable && (
							<LockIcon className={classes.lockIcon} />
						)}
						{icon && !disable && (
							<VolumeUpIcon className={classes.lockIcon} />
						)}
						{item && item.img && (
							<CardMedia
								className={classes.img}
								image={item.img}
								title={item.label}
							/>
						)}
						<CardContent className={classes.cardContent}>
							<Typography gutterBottom variant="h5" component="h2">
								{item && item.label ? item.item || item.topic || item.label : "No Name"}
							</Typography>
							<Typography
								variant="overline"
								gutterBottom
							>
								{item && (item.desc || item.language)}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Fade>
		</Link>
	);
};

export default withStyles(styles)(MoCard);
