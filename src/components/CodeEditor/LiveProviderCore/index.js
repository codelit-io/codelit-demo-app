import React, { useEffect } from "react";

import { addFocusOnEditor } from "./util";
import { LiveEditor, LiveProvider, LivePreview, LiveError } from "react-live";
import Grid from "@material-ui/core/Grid";
import Headline from "../../shared/Headline";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import MoTitle from "../../shared/MoTitle";
import withStyles from "@material-ui/core/styles/withStyles";
import { reactLiveTheme } from "../../../utils/reactLiveTheme";

const LiveProviderCore = ({ classes, question, handleOnChange }) => {
	useEffect(() => {
		addFocusOnEditor();
	}, []);

	return (
		<LiveProvider code={question.question} language="jsx" noInline={false}>
			<Grid item md={6} sm={12} xs={12} style={{ width: "100%" }}>
				<MoTitle
					text={question.label}
					fade={question.label && true}
					margin="36px 0 36px"
				/>
				<Slide
					direction="right"
					in={question.question && true}
					mountOnEnter
					timeout={{ enter: 800, exit: 400 }}
					unmountOnExit
				>
					<div
						className={`${classes.browserMockup} ${question.isCorrect &&
							classes.correct}`}
					>
						<div className={classes.browserButtons}></div>
						<div className={classes.browserFilename}>
							<span>{`index.${question.language}`}</span>
						</div>
						<div className={classes.editor}>
							<LiveEditor onChange={handleOnChange} theme={reactLiveTheme} />
						</div>
					</div>
				</Slide>
			</Grid>
			<Grid item md={6} sm={12} xs={12}>
				<MoTitle text="Live Preview" fade={true} margin="36px 0 36px" />
				<Slide
					direction="left"
					in={(question.isPlayground && true) || (question.question && true)}
					mountOnEnter
					timeout={{ enter: 800, exit: 800 }}
					unmountOnExit
				>
					<div className={classes.browserMockup}>
						<div className={classes.browserButtons}></div>
						<div className={classes.browserButtons2}>
							<span>localhost:3000</span>
						</div>
						<div className={classes.preview}>
							<LivePreview />
						</div>
					</div>
				</Slide>
			</Grid>
			{question.isPlayground && (
				<Grid item md={12} sm={12} xs={12}>
					<LiveError />
				</Grid>
			)}
			<Grid item md={12} sm={12} xs={12}>
				<Headline isCorrect={question && question.isCorrect} />
			</Grid>
		</LiveProvider>
	);
};

export default withStyles(styles)(LiveProviderCore);
