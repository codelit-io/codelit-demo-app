import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PageHeader from "../PageHeader";
import styles from "./styles";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "recompose";

const PageCard = ({ img, title, children, history, classes }) => {
	return (
		<>
			<PageHeader img="" title={title} history={history}/>
			<Card className={classes.card}>
				{img && <CardMedia className={classes.img} image={img} />}
				<CardContent>{children}</CardContent>
			</Card>
		</>
	);
};

export default compose(withStyles(styles), withRouter)(PageCard);
