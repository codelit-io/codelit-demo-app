import React, { useEffect, useState } from "react";

import { LiveEditor, LiveProvider, LivePreview, LiveError } from "react-live";
import { Grid } from "@material-ui/core";
import Headline from "../shared/Headline";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import Spinner from "../../components/shared/Spinner";
import Title from "../../components/shared/Title";
import withStyles from "@material-ui/core/styles/withStyles";
import { reactLiveTheme } from "../../utils/reactLiveTheme";

const CodeEditor = ({ classes, question, setIsCorrect }) => {
	const [state, setState] = useState([]);
	const [loading, setLoading] = useState(true);

	const handleOnChange = userAnswer => {
		if (userAnswer === "{}" || userAnswer === "") {
			return;
		}
		if (userAnswer.replace(/\s/g, "") === state.answer.replace(/\s/g, "")) {
			setState({ ...state, isCorrect: true, question: userAnswer });
			setIsCorrect(true);
		} else {
			setState({ ...state, question: userAnswer });
		}
	};

	useEffect(() => {
		setState(question);
		setLoading(false);
		return () => setState([]);
	}, [question]);

	return (
		question && (
			<Grid container spacing={4}>
				<Spinner loading={loading} color="primary" />

				<LiveProvider code={state.question} language="jsx" noInline={false}>
					<Grid item md={6} sm={12} xs={12} style={{ width: "100%" }}>
						<Title text={state.label} fade={true} />
						<Slide
							direction="right"
							in={state.answer && true}
							mountOnEnter
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
							in={question.isPlayground || state.isCorrect}
							mountOnEnter
							unmountOnExit
						>
							<div>
								<LivePreview className={`${classes.preview} ${classes.card}`} />
							</div>
						</Slide>
					</Grid>
					{question.isPlayground && (
						<Grid item md={12} sm={12} xs={12}>
							<LiveError />
						</Grid>
					)}
					<Grid item md={12} sm={12} xs={12}>
						<Headline isCorrect={state && state.isCorrect} />
					</Grid>
				</LiveProvider>
			</Grid>
		)
	);
};

export default withStyles(styles)(CodeEditor);
