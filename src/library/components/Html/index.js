import React from "react";
import {
	Button,
	FormControl,
	InputLabel,
	Input,
	FormHelperText
} from "@material-ui/core";

const Html = ({ onClick, topic }) => {
	return (
		<form>
			<h1>{topic}</h1>
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
	);
};

export default Html;
