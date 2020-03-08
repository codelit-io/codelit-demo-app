import React, { useEffect, useState } from "react";

import { AuthUserContext, withAuthentication } from "../../components/Session";
import Grid from "@material-ui/core/Grid";
import MoCard from "../../components/shared/MoCard";
import PageHeader from "../../components/shared/PageHeader";
import Spinner from "../../components/shared/Spinner";
import Title from "../../components/shared/Title";

const Questions = ({ firebase, history }) => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [userPoints, setUserPoints] = useState(0);

	const QuestionsList = ({ authUser, questions }) => {
		if (authUser) {
			setUserPoints(authUser.points);
		}
		return questions.map((question, index) => (
			<React.Fragment key={index}>
				{question.content && (
					<Grid item xs={12} sm={12} md={12}>
						<Title
							text={question.content}
							fade={true}
							margin="40px 0 0 0"
							width="100%"
						></Title>
					</Grid>
				)}
				<Grid item xs={12} sm={6} md={6}>
					<MoCard userPoints={userPoints} item={question}></MoCard>
				</Grid>
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
		return () => getQuestions();
	}, [firebase]);

	return (
		<>
			<PageHeader img="" title="Topics" history={history} />
			<Spinner loading={loading} color="primary" />
			<Grid container spacing={4}>
				<AuthUserContext.Consumer>
					{authUser => (
						<QuestionsList authUser={authUser} questions={questions} />
					)}
				</AuthUserContext.Consumer>
			</Grid>
		</>
	);
};
export default withAuthentication(Questions);
