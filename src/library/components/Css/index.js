import React from "react";
import PageHeader from "../../../components/shared/PageHeader";
import Typography from "@material-ui/core/Typography"
import Iframe from "react-iframe";
import useStyles from "./styles";

const Css = ({ course, topic }) => {
	const classes = useStyles();
	return (
		<>
			<PageHeader title={topic} course={course}></PageHeader>
			<Typography gutterBottom variant="h5" component="h2"> Podcast Coming soon! </Typography>
			<div className={classes.card}>
				<Iframe url="https://stackblitz.com/edit/basic-css-moskool?embed=1&file=index.html&hideExplorer=1&hideNavigation=1" width="100%" height="100%" className={classes.iframe} />
			</div>
		</>
	);
};

export default Css;
