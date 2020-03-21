import React, { useEffect, useState } from "react";

import { AuthUserContext, withAuthentication } from "../../components/Session";
import Grid from "@material-ui/core/Grid";
import QuestionCard from "./QuestionCard";
import MoPage from "../../components/shared/MoPage";
import QuestionCategory from "./QuestionCategory";

const Questions = ({ firebase }) => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [userPoints, setUserPoints] = useState(0);

	const QuestionsList = ({ authUser, questions }) => {
		if (authUser) {
			setUserPoints(authUser.points);
		}

		return questions.map((question, index) => (
			<React.Fragment key={index}>
				{question.category && <QuestionCategory category={question.category} index={index} />}
				<QuestionCard
					userPoints={userPoints}
					question={question}
					index={index}
				/>
			</React.Fragment>
		));
	};

	useEffect(() => {
		setLoading(true);
		const getQuestions = firebase
			.questions()
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
	}, [firebase]);

	return (
		<AuthUserContext.Consumer>
			{authUser => (
				<MoPage
					title="Super Easy"
					points={authUser && authUser.points}
					loading={loading}
					numberOfQuestions={questions.length}
					
					isScoreBoard={true}
				>
					<>
						{questions && (
							<Grid container spacing={4}>
								<QuestionsList authUser={authUser} questions={questions} />
							</Grid>
						)}
					</>
				</MoPage>
			)}
		</AuthUserContext.Consumer>
	);
};
export default withAuthentication(Questions);
