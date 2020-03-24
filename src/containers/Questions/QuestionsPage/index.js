import React, { lazy, useEffect, useState } from "react";

const Grid = lazy(() => import("@material-ui/core/Grid"));
const MoPage = lazy(() => import("../../../components/shared/MoPage"));
const QuestionsList = lazy(() => import("./QuestionsList"));

const QuestionsPage = ({ authUser, configs, firebase }) => {
	const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  
	useEffect(() => {
		setLoading(true);
		const getQuestions = firebase
			.collection(configs.slug === "super-easy" ? "questions" : configs.slug)
			.orderBy("id")
			.onSnapshot(snapshot => {
				if (snapshot.size) {
					let questions = [];
					snapshot.forEach(doc => {
						questions.push({
							...doc.data(),
							uid: doc.id
						});
					});
					setQuestions(questions);
					setLoading(false);
				} else {
					setQuestions([]);
					setLoading(false);
				}
			});
		/* Unsubscribe from firebase on unmount */
		return () => {
			setQuestions([]);
			getQuestions();
		};
	}, [firebase, configs]);

	return (
		<MoPage
			title={configs.label}
			points={authUser && authUser.points}
			loading={loading}
			numberOfQuestions={questions.length}
			isScoreBoard={true}
		>
			{questions && (
				<Grid container spacing={4}>
					<QuestionsList
						authUser={authUser}
						questions={questions}
						configs={configs}
					/>
				</Grid>
			)}
		</MoPage>
	);
};

export default QuestionsPage;
