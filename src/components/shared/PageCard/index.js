import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const PageCard = ({ img, title, children }) => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			{img && <CardMedia className={classes.img} image={img} />}
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{title}
				</Typography>
				{children}
			</CardContent>
		</Card>
	);
};

export default PageCard;
