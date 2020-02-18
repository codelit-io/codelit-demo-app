import React, { useState, useEffect } from "react";

import { LiveEditor, LiveProvider, LivePreview, LiveError } from "react-live";
import { Grid } from "@material-ui/core";
import Headline from "../shared/Headline";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import Title from "../../components/shared/Title";
import withStyles from "@material-ui/core/styles/withStyles";
import { reactLiveTheme } from "../../utils/reactLiveTheme";

const CodeEditor = ({ classes, question, handleOnChange }) => {
	const [state, setState] = useState(question);

	useEffect(() => {
		setState(question);
	}, [question]);

	return (
		<Grid container spacing={4}>
			<LiveProvider code={state.question} language="jsx" noInline={false}>
				<Grid item md={6} sm={12} xs={12} style={{ width: "100%" }}>
					<Title text={state.label} fade={state.label && true} />
					<Slide
						direction="right"
						in={state.question && true}
						mountOnEnter
						timeout={{ enter: 800, exit: 400 }}
						unmountOnExit
					>
						<div
							className={`${classes.editor} ${classes.card} ${state.isCorrect &&
								classes.correct}`}
						>
							<LiveEditor onChange={handleOnChange} theme={reactLiveTheme} />
						</div>
					</Slide>
				</Grid>
				<Grid item md={6} sm={12} xs={12}>
					<Title text="Code Preview" fade={true} />
					<Slide
						direction="left"
						in={(state.isPlayground && true) || (state.question && true)}
						mountOnEnter
						timeout={{ enter: 800, exit: 800 }}
						unmountOnExit
					>
						<div className={classes.browserMockup}>
							<div className={classes.browserButtons}></div>
							<div className={classes.browserButtons2}></div>
							<div className={classes.preview} >
							<LivePreview />
							</div>
						</div>
					</Slide>
				</Grid>
				{state.isPlayground && (
					<Grid item md={12} sm={12} xs={12}>
						<LiveError />
					</Grid>
				)}
				<Grid item md={12} sm={12} xs={12}>
					<Headline isCorrect={state && state.isCorrect} />
				</Grid>
			</LiveProvider>
		</Grid>
	);
};

export default withStyles(styles)(CodeEditor);
