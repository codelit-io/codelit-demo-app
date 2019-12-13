import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	card: {
		maxWidth: 345,
		"&:hover": {
			// boxShadow: "0 0 51px 0 rgba(0,0,0,.08), 0 6px 18px 0 rgba(0,0,0,.05)",
			transform: "translateY(-5px)",
			background: "white"
		}
	},
	content: {
		padding: 20,
		display: "flex",
		flexDirection: "column"
	},
	img: {
		height: 100,
		width: 100
	},
	link: {
		textDecorationLine: "none",
		"&:hover": {
			textDecorationLine: "none"
		}
	}
});

export const MoshCard = ({ icon }) => {
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
						<Typography variant="body2" color="textSecondary" component="p">
							{icon.desc}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
};
