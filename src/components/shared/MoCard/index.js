import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import Fade from "@material-ui/core/Fade";
import LockIcon from "@material-ui/icons/Lock";

const MoCard = ({ topic }) => {
	const classes = useStyles();
	return (
		<Link
			to={(topic && topic.url) || ""}
			className={topic && topic.disable ? classes.disableLink : classes.link}
		>
			<Fade timeout={{ enter: 800 }} in={true}>
				<Card className={`${classes.card} ${topic && topic.disable && classes.disableCard}`}>
					<CardActionArea className={classes.content}>
						{topic && topic.disable && <LockIcon className={classes.lockIcon}/>}
						{topic && topic.img && (
							<CardMedia
								className={classes.img}
								image={topic.img}
								title={topic.label}
							/>
						)}
						<CardContent className={classes.cardContent}>
							<Typography gutterBottom variant="h5" component="h2">
								{topic && topic.label ? topic.label : "No Name"}
							</Typography>
							<Typography
								className="desc"
								variant="body2"
								color="textSecondary"
								component="p"
							>
								{topic && topic.desc}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Fade>
		</Link>
	);
};

export default MoCard;
