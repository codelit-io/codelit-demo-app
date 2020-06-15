/**
 * Single Question is code editor, code preview and error console. This container fetches a single question
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Object} history - Provides several different implementations for managing session history in JavaScript in various environments - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<CodeEditor/>} - returns CodeEditor component which renders the rest of the components
 */

import React, { lazy, useCallback, useEffect, useState, Suspense } from "react";

import * as ROUTES from "constants/routes";
import * as ROLES from "constants/roles";

import awardPlayerPoints from "./awardPlayerPoints";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ButtonBase from "@material-ui/core/ButtonBase";
import MoContent from "components/library/MoContent";
import MoSnackbar from "components/library/MoSnackBar";
import MoPage from "components/library/MoPage";
import withAuthentication from "components/shared/Session/withAuthentication";
import MoSpinner from "components/library/MoSpinner";
import stringSimilarity from "string-similarity";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { retry } from "utils/retryLazyImports";

const CodeEditor = lazy(() =>
	retry(() => import("components/shared/CodeEditor"))
);
const MoConfetti = lazy(() =>
	retry(() => import("components/library/MoConfetti"))
);

const QuestionViewMode = ({ authUser, firebase, history, match }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [question, setQuestion] = useState(null);
	const [isCorrect, setIsCorrect] = useState(false);
	const [snackbarProps, setSnackbarProps] = useState(null);
	const [matchPercent, setMatchPercent] = useState();
	const useStyles = makeStyles((theme) =>
		createStyles({
			buttonArea: {
				textAlign: "left",
				width: "100%",
				"&:hover": {
					background: theme.grey.superLight,
					cursor: "text",
				},
			},
		})
	);

	const classes = useStyles();
	const triggerNextQuestion = useCallback(() => {
		const id = Number(question.id) + 1;
		/* Clear questions */
		setQuestion({});

		/* Clear matchPercent */
		setMatchPercent();

		setIsCorrect(false);
		/* A delay before navigating to a new page */
		setTimeout(() => {
			history.push(
				ROUTES.COLLECTIONS.path + "/" + match.params.collection + "/" + id
			);
		}, 600);
	}, [history, match, question]);

	/* Checks if user code matches Pre made answer */
	const handleOnChange = useCallback(
		({ userAnswer }) => {
			if (userAnswer === "{}" || userAnswer === "") {
				return;
			}

			const userAnswerTrimmed = userAnswer.replace(/\s/g, "");
			const correctAnswerTrimmed = question.answer.replace(/\s/g, "");
			const cosineSimilarityMatchPercent = stringSimilarity.compareTwoStrings(
				userAnswerTrimmed,
				correctAnswerTrimmed
			);
			setMatchPercent(cosineSimilarityMatchPercent * 100 || 10);
			if (
				// if user answer equals the stored answer in db
				userAnswerTrimmed === correctAnswerTrimmed ||
				// or if user answer is greater than or equal 98% based on jaroWrinker string matching algorithm
				cosineSimilarityMatchPercent * 100 >=
					(question?.matchPercent * 100 || 100)
			) {
				setQuestion({ ...question, isCorrect: true, question: userAnswer });
				/* Awards users a point based on level completion */

				awardPlayerPoints(
					authUser,
					firebase,
					question.id,
					match.params.collection
				);
				setIsCorrect(true);
				setSnackbarProps({
					title: "Hooray!",
					buttonText: "Keep Going",
					buttonIcon: <ArrowForwardIcon />,
				});
			} else {
				setQuestion({ ...question, question: userAnswer });
			}
		},
		[authUser, firebase, match, question]
	);
	/* Handler to send user to editMode page */
	const handleOnClick = useCallback(() => {
		if (authUser && authUser.roles[ROLES.ADMIN]) {
			history.push(`${question.id}/isEditMode`);
		}
	}, [authUser, history, question]);

	useEffect(() => {
		const id = match.params.questionId;
		setIsLoading(true);
		const unsubscribe = firebase
			.getCollectionById(
				"courses/" + match.params.collection + "/questions",
				id
			)
			.onSnapshot((snapshot) => {
				if (snapshot.size) {
					let question = [];
					snapshot.forEach((doc) =>
						question.push({ ...doc.data(), uid: doc.id })
					);
					setQuestion(question[0]);
				} else {
					setQuestion({
						label: "You have finished all questions ✅",
						question: "<h1>Nice Job 🎉</h1>",
						language: "html",
					});
				}
				setIsLoading(false);
			});

		return () => {
			unsubscribe();
			setSnackbarProps(null);
		};
	}, [firebase, match]);

	return (
		<Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
			<MoConfetti isActive={isCorrect} />
			<ButtonBase
				className={classes.buttonArea}
				onClick={() => handleOnClick()}
				disabled={authUser && authUser.roles && !authUser.roles[ROLES.ADMIN]}
			>
				<MoPage
					isAdmin={
						authUser && authUser.roles && !!authUser.roles[ROLES.ADMIN] && true
					}
					title={question?.title}
					subtitle={question?.label}
					hint={question?.subtitle}
					isLoading={isLoading}
					isCard={false}
				/>
			</ButtonBase>
			{question?.content && <MoContent content={question.content} />}
			{question && (
				<CodeEditor
					handleOnChange={(userAnswer) => handleOnChange(userAnswer)}
					question={question}
					matchPercent={matchPercent}
					sm={6}
					md={6}
				/>
			)}
			{snackbarProps && (
				<MoSnackbar
					isActive={isCorrect}
					authUser={authUser}
					snackbarProps={snackbarProps}
					triggerNextQuestion={() => triggerNextQuestion()}
				/>
			)}
		</Suspense>
	);
};
export default withAuthentication(QuestionViewMode);
