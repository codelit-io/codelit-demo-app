import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "./styles";
import PageHeader from "../PageHeader";
import { withRouter } from "react-router-dom";

const PageCard = ({ img, title, children, history }) => {
	const classes = useStyles();
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

export default withRouter(PageCard);
