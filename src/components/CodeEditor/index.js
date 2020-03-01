import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import LiveProviderBase from "./LiveProviderBase";

const CodeEditor = ({ question, handleOnChange }) => {
	const [state, setState] = useState(question);

	useEffect(() => {
		setState(question);
	}, [question]);

	return (
		<Grid container spacing={4}>
			<LiveProviderBase question={state} handleOnChange={handleOnChange} />
		</Grid>
	);
};

export default CodeEditor;
