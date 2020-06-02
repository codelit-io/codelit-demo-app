import React, { useEffect } from "react";

import { addFocusOnEditor, getPreviewElement } from "./util";
import { LiveEditor, LiveProvider, LivePreview, LiveError } from "react-live";
import { lightTheme } from "utils/reactLiveTheme";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Headline from "components/library/MoHeadline";
import MoBrowserMockup from "components/library/MoBrowserMockup";
import Typist from "react-typist";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const LiveProviderCore = ({
	handleOnChange,
	md,
	sm,
	matchPercent,
	question,
}) => {
	useEffect(() => {
		addFocusOnEditor();
	}, [question]);

	const onChange = (userAnswer) => {
		const previewElement = getPreviewElement();
		handleOnChange({ userAnswer, previewElement });
	};

	// TODO finish number of lines for editor
	// Count newlines and pad to match actual line numbers
	// const lines = (question?.question?.match(/\n/g) || []).length + 2;
	// Create content with all line numbers and newline them
	// const lineNos = [...Array(lines).keys()].slice(1).join("\\00000a");

	const useStyles = makeStyles((theme) =>
		createStyles({
			hint: {
				...theme.editorFont,
				color: "#8e8e8e",
				top: "1.25rem",
				position: "absolute",
				zIndex: "-1",
				padding: "0.625rem",
			},
			liveEditor: {
				overflow: "visible !important",
				"&:before": {
					left: "-1.25rem",
					fontFamily: "Inconsolata, monospace",
					paddingTop: "0.6rem",
					// content: `"${lineNos}"`,
					width: `1.25rem`,
					position: "absolute",
					whiteSpace: "pre",
					textAlign: "right",
					opacity: 1,
					top: 0,
				},
			},
		})
	);
	const classes = useStyles();

	return (
		<LiveProvider code={question.question} language="jsx" noInline={false}>
			<Grid item md={md} sm={sm} xs={12} style={{ width: "100%" }}>
				<Slide
					direction="right"
					in={question.answer && true}
					mountOnEnter
					timeout={{ enter: 400, exit: 400 }}
					unmountOnExit
				>
					<div>
						<MoBrowserMockup
							fileType={question.language}
							matchPercent={matchPercent}
							isEditor={true}
						>
							<div>
								<LiveEditor
									onChange={(e) => onChange(e)}
									theme={lightTheme}
									className={classes.liveEditor}
								/>
								{!question.question && question.answer && (
									<div className={classes.hint}>
										<Typist
											avgTypingDelay={60}
											stdTypingDelay={30}
											startDelay={800}
											cursor={{
												show: true,
												blink: false,
												hideWhenDone: true,
											}}
										>
											{question.answer}
										</Typist>
									</div>
								)}
							</div>
						</MoBrowserMockup>
					</div>
				</Slide>
			</Grid>
			<Grid item md={md} sm={sm} xs={12}>
				<Slide
					direction="left"
					in={(question.isPlayground && true) || (question.answer && true)}
					mountOnEnter
					timeout={{ enter: 400, exit: 400 }}
					unmountOnExit
				>
					<div>
						<MoBrowserMockup fileType={question.language} isEditor={false}>
							<LivePreview />
						</MoBrowserMockup>
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

export default LiveProviderCore;
