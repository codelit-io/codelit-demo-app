import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const MoCard = ({ icon }) => {
	const classes = useStyles();
	return (
		<Link to={icon.url || ''} className={classes.link}>
			<Card className={classes.card}>
				<CardActionArea className={classes.content}>
					{icon && icon.img && (
						<CardMedia
							className={classes.img}
							image={icon.img}
							title={icon.label}
						/>
					)}
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{icon.label}
						</Typography>
						<Typography className="desc" variant="body2" color="textSecondary" component="p">
							{icon.desc}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
};

export default MoCard;