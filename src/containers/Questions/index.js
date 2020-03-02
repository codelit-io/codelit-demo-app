import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import MoCard from "../../components/shared/MoCard";
import PageHeader from "../../components/shared/PageHeader";
import Spinner from "../../components/shared/Spinner";
import { AuthUserContext, withAuthentication } from "../../components/Session";

const Questions = ({ firebase, history }) => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [userLevel, setUserLevel] = useState(0);

	const QuestionsList = ({ authUser, questions }) => {
		if (authUser) {
			setUserLevel(authUser.level)
		};
		return questions.map((question, index) => (
			<Grid key={index} item xs={12} sm={6} md={6}>
				<MoCard userLevel={userLevel} item={question}></MoCard>
			</Grid>
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
