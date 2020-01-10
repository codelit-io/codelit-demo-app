import React, { lazy } from "react";
import {
	Button,
	FormControl,
	InputLabel,
	Input,
	FormHelperText
} from "@material-ui/core";
import useStyles from "./styles";
import PageHeader from "../../../components/shared/PageHeader";

const ReactPlayer = lazy(() => import("react-player"));

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
					<FormHelperText id="my-helper-text">
						Your personal email address
					</FormHelperText>
				</FormControl>
				<Button onClick={() => onClick()}>Save</Button>
			</form>
			<div className={`${classes.card} ${classes.audioCard}`}>
				<ReactPlayer
					url='https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/podcasts%2FtestAudio.mp3?alt=media&token=780760ee-5214-4973-b83a-f951bbb90d1a'
					playing
					controls={true}
					light={false}
					width='100%'
					height='50px'
				/>
			</div>
			<div className={`${classes.card} ${classes.playgroundCard}`}>
				<iframe
					src="https://stackblitz.com/edit/basic-html-moskool?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"
					title="basic-html-moskool"
					width="100%"
					height="100%"
					className={classes.iframe}
				/>
			</div>
		</>
	);
};

export default Html;
