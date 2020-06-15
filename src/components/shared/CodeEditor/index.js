import React, { lazy, useState, useEffect, Suspense } from "react";

import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import { retry } from "utils/retryLazyImports";

const LiveProviderCore = lazy(() => retry(() => import("./LiveProviderCore")));

const CodeEditor = ({ handleOnChange, md, sm, matchPercent, question }) => {
	const [state, setState] = useState(question);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	useEffect(() => {
		if (question) {
			try {
				/* Questions can contain special JSON characters that needs to be parsed */
				const parseQuestion = JSON.parse(question.question);
				setState({ ...question, question: parseQuestion });
			} catch {
				setState(question);
			}
		}
	}, [question]);

	return (
		<Grid container spacing={2}>
			<Suspense>
				<LiveProviderCore
					question={state}
					handleOnChange={handleOnChange}
					md={md}
					sm={sm}
					matchPercent={matchPercent}
					isMobile={isMobile}
				/>
			</Suspense>
		</Grid>
	);
};

export default CodeEditor;
