/**
 * Single Question is code editor, code preview and error console. This container fetches a single question
 * @prop {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @prop {Object} history - Provides several different implementations for managing session history in JavaScript in various environments - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<CodeEditor/>} - returns CodeEditor component which renders the rest of the components
 */

import React, { lazy, useCallback, useEffect, useState, Suspense } from "react";

import * as ROUTES from "constants/routes";
import * as ROLES from "constants/roles";

import awardPlayerPoints from "./awardPlayerPoints";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ButtonBase from "@material-ui/core/ButtonBase";
import Content from "./Content";
import MoSnackbar from "components/library/MoSnackBar";
import MoPage from "components/library/MoPage";
import withAuthentication from "components/shared/Session/withAuthentication";
import MoHelmet from "components/library/MoHelmet";
import MoSpinner from "components/library/MoSpinner";
import stringSimilarity from "string-similarity";

const CodeEditor = lazy(() => import("components/shared/CodeEditor"));
const MoConfetti = lazy(() => import("components/library/MoConfetti"));

const QuestionViewMode = ({ authUser, firebase, history, match }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [question, setQuestion] = useState(null);
	const [isCorrect, setIsCorrect] = useState(false);
	const [snackbarProps, setSnackbarProps] = useState(null);
	const [matchPercent, setMatchPercent] = useState();

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
	}, [history, match.params.collection, question]);

	/* Checks if user code matches Pre made answer */
	const handleOnChange = useCallback(
		(userAnswer) => {
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
				cosineSimilarityMatchPercent >= (question?.matchPercent || 0.99)
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
		if (authUser.roles[ROLES.ADMIN]) {
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
			<MoHelmet
				title="Moskool - React frontend development learning questions"
				description="MoSkool - Play Free React learning questions and master all aspects of frontend development without any fees"
				path={match.url}
			/>
			<MoConfetti isActive={isCorrect} />
				<ButtonBase
					onClick={() => handleOnClick()}
					disabled={!authUser?.roles[ROLES.ADMIN]}
					style={{ textAlign: "left" }}
				>
					<MoPage
						isAdmin={!!authUser?.roles[ROLES.ADMIN] && true}
						subtitle={question?.label}
						title={question?.title}
						isLoading={isLoading}
						isCard={false}
					/>
				</ButtonBase>
			{question?.content && <Content content={question.content} />}
			{question && (
				<CodeEditor
					handleOnChange={(userAnswer) => handleOnChange(userAnswer)}
					sm={6}
					md={6}
					question={question}
					matchPercent={matchPercent}
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
