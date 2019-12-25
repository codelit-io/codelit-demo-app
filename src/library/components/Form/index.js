import React from "react";
import { Button, FormControl, InputLabel, Input, FormHelperText } from "@material-ui/core";

const Form = ({onClick, type}) => {
	return (
		<form>
			<h1>{type}</h1>
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

export default Form;
