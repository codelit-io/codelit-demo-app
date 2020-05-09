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

import MoSnackbar from "components/shared/MoSnackBar";
import QuestionForm from "containers/Question/QuestionEditMode/QuestionForm";
import withAuthorization from "components/Session/withAuthorization";

const CodeEditor = lazy(() => import("components/CodeEditor"));

const QuestionEditMode = ({ authUser, firebase, history, match }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [question, setQuestion] = useState({});
	const [isCorrect, setIsCorrect] = useState(false);
	const [snackbarProps, setSnackbarProps] = useState(null);

	const triggerNextQuestion = useCallback(() => {
		const id = Number(question.id) + 1;
		/* Clear questions */
		setQuestion({});

		setIsCorrect(false);
		/* A delay before navigating to a new page */
		setTimeout(() => {
			history.push(
				ROUTES.COLLECTIONS.path + "/" + match.params.collection + "/" + id
			);
		}, 600);
	}, [history, match.params.collection, question.id]);

	/* Checks if user code matches Pre made answer */
	const handleOnChange = useCallback({
		
	},[authUser, firebase, match, question]);

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
					if (id === "new") {
						setQuestion({
							title: "Title goes here",
							label: "Subtitle goes here",
							question: "<h1>Question goes here</h1>",
							answer: "<h1>Answer goes here🎉</h1>",
							language: "html",
						});
					}
				}
				setIsLoading(false);
			});

		return () => {
			unsubscribe();
			setSnackbarProps(null);
		};
	}, [firebase, match]);

	return (
		<Suspense>
			<QuestionForm
				subtitle={question.label}
				title={question.title}
				isLoading={isLoading}
				isCard={false}
			/>
			{!isLoading && (
				<>
					{question && (
						<CodeEditor
							handleOnChange={(userAnswer) => handleOnChange(userAnswer)}
							sm={6}
							md={6}
							question={question}
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
				</>
			)}
		</Suspense>
	);
};

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default withAuthorization(condition)(QuestionEditMode);
