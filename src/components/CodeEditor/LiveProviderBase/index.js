import React from "react";

import { LiveEditor, LiveProvider, LivePreview, LiveError } from "react-live";
import Grid from "@material-ui/core/Grid";
import Headline from "../../shared/Headline";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import Title from "../../../components/shared/Title";
import withStyles from "@material-ui/core/styles/withStyles";
import { reactLiveTheme } from "../../../utils/reactLiveTheme";

const LiveProviderBase = ({ classes, question, handleOnChange }) => {
	return (
			<LiveProvider code={question.question} language="jsx" noInline={false}>
				<Grid item md={6} sm={12} xs={12} style={{ width: "100%" }}>
					<Title text={question.label} fade={question.label && true} />
					<Slide
						direction="right"
						in={question.question && true}
						mountOnEnter
						timeout={{ enter: 800, exit: 400 }}
						unmountOnExit
					>
						<div
							className={`${classes.editor} ${classes.card} ${question.isCorrect &&
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
						in={(question.isPlayground && true) || (question.question && true)}
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

export default withStyles(styles)(LiveProviderBase);
