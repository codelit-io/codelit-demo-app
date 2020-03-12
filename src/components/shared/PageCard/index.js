import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import styles from "./styles";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "recompose";
import MoTitle from "../MoTitle";

const PageCard = ({ img, title, children, classes }) => {
	console.log(title)
	return (
		<>
			<MoTitle fade={title} text={title} margin="0 0 26px 0"/>
			<Card className={classes.card}>
				{img && <CardMedia className={classes.img} image={img} />}
				<CardContent>{children}</CardContent>
			</Card>
		</>
	);
};

export default compose(withStyles(styles), withRouter)(PageCard);
