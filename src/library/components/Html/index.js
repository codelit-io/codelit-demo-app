import React from "react";
import {
	Button,
	FormControl,
	InputLabel,
	Input,
	FormHelperText
} from "@material-ui/core";
import Iframe from "react-iframe";
import useStyles from "./styles";
import PageHeader from "../../../components/shared/PageHeader";

const Html = ({ onClick, topic, course }) => {
	const classes = useStyles();
	return (
		<>
			<form>
				<PageHeader title={topic} course={course}></PageHeader>
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
			<div className={classes.card}>
				<Iframe
					url="https://codesandbox.io/embed/brave-galois-5b0rb?fontsize=12&hidenavigation=1"
					width="100%"
					height="100%"
					className={classes.iframe}
				/>
			</div>
		</>
	);
};

export default Html;
