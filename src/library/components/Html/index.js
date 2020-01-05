import React from "react";
import { Button, FormControl, InputLabel, Input, FormHelperText } from "@material-ui/core";
import Iframe from "react-iframe";
import useStyles from "./styles";
import PageHeader from "../../../components/shared/PageHeader";
import Typography from "@material-ui/core/Typography"

const Html = ({ onClick, topic, course }) => {
	const classes = useStyles();
	return (
		<>
			<PageHeader title={topic} course={course}></PageHeader>
			<form style={{ display: "none" }}>
				<pre>
					<code>{"<p> I am a paragraph </p>"}</code>
				</pre>
				<pre>
					<code>{"<h1> I am a top level heading </h1>"}</code>
				</pre>
				<pre>
					<code>{"<h2> I am a second level heading </h2>"}</code>
				</pre>
				<FormControl>
					<InputLabel htmlFor="my-input">Email</InputLabel>
					<Input id="my-input" aria-describedby="my-helper-text" />
					<FormHelperText id="my-helper-text">Your personal email address</FormHelperText>
				</FormControl>
				<Button onClick={() => onClick()}>Save</Button>
			</form>
			<Typography gutterBottom variant="h5" component="h2"> Podcast Coming soon! </Typography>
			<div className={classes.card}>
				<Iframe url="https://stackblitz.com/edit/basic-html-moskool?embed=1&file=index.html&hideExplorer=1&hideNavigation=1" width="100%" height="100%" className={classes.iframe} />
			</div>
		</>
	);
};

export default Html;
