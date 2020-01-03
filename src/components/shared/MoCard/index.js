import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import Fade from "@material-ui/core/Fade";

const MoCard = ({ icon }) => {
	const classes = useStyles();
	return (
		<Link to={(icon && icon.url) || ""} className={classes.link}>
			<Fade timeout={{ enter: 1000 }} in={true}>
				<Card className={classes.card}>
					<CardActionArea className={classes.content}>
						{icon && icon.img && <CardMedia className={classes.img} image={icon.img} title={icon.label} />}
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{icon && icon.label ? icon.label : "No Name"}
							</Typography>
							<Typography className="desc" variant="body2" color="textSecondary" component="p">
								{icon && icon.desc}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Fade>
		</Link>
	);
};

export default MoCard;
