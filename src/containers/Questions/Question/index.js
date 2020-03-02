import React, { useEffect, useState } from "react";

import * as ROUTES from "../../../constants/routes";

import { AuthUserContext } from "../../../components/Session";
import CodeEditor from "../../../components/CodeEditor";
import CongratsCard from "./CongratsCard";
import MoConfetti from "../../../components/shared/MoConfetti";
import PageHeader from "../../../components/shared/PageHeader";
import Spinner from "../../../components/shared/Spinner";
import { withAuthentication } from "../../../components/Session";

const Question = ({ firebase, history, match }) => {
	const [loading, setLoading] = useState(true);
	const [question, setQuestion] = useState({});
	const [isCorrect, setIsCorrect] = useState(false);

	const triggerNextQuestion = () => {
		const nextLevelReqPoints = Number(question.id) + 1;
		navigateToNextLevel(nextLevelReqPoints);
	};

	const navigateToNextLevel = id => {
		history.push(ROUTES.QUESTIONS.path + "/" + id);
	};

	const awardPlayerPoints = authUser => {
		const nextLevelReqPoints = Number(question.id) + 1;

		if (authUser) {
			/* Prevents overwriting player points if played older questions */
			/* TODO move me */
			const points = nextLevelReqPoints > authUser.points ? nextLevelReqPoints : authUser.points;
			firebase.user(authUser.uid).update({ points });
		} else {
			console.log("User not signed up");
		}
	};

	const handleOnChange = (userAnswer, authUser) => {
		if (userAnswer === "{}" || userAnswer === "") {
			return;
		}
		if (userAnswer.replace(/\s/g, "") === question.answer.replace(/\s/g, "")) {
			setQuestion({ ...question, isCorrect: true, question: userAnswer });
			awardPlayerPoints(authUser);
			setIsCorrect(true);
		} else {
			setQuestion({ ...question, question: userAnswer });
		}
	};

	useEffect(() => {
		const id = match.params.question;
		setLoading(true);
		setIsCorrect(false);

		const unsubscribe = firebase.getQuestionById(id).onSnapshot(snapshot => {
			if (snapshot.size) {
				let question = [];
				snapshot.forEach(doc => question.push({ ...doc.data(), uid: doc.id }));
				setQuestion(question[0]);
			} else {
				setIsCorrect(false);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, [firebase, match]);

	return (
		<>
			<PageHeader img="" title={question.topic} history={history} />
			<Spinner loading={loading} color="primary" />
			<AuthUserContext.Consumer>
				{authUser => (
					<>
						{question && (
							<CodeEditor
								handleOnChange={userAnswer =>
									handleOnChange(userAnswer, authUser)
								}
								question={question}
							/>
						)}

						<CongratsCard
							isActive={isCorrect}
							authUser={authUser}
							triggerNextQuestion={() => triggerNextQuestion()}
						/>
					</>
				)}
			</AuthUserContext.Consumer>

			<MoConfetti isActive={isCorrect} />
		</>
	);
};
export default withAuthentication(Question);
