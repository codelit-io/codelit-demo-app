import React, { useEffect, useState } from "react";

import { AuthUserContext } from "../../../components/Session";
import BottomNav from "../../../components/BottomNav";
import CodeEditor from "../../../components/CodeEditor";
import PageHeader from "../../../components/shared/PageHeader";
import { withAuthentication } from "../../../components/Session";
import Spinner from "../../../components/shared/Spinner";

const Question = ({ firebase, history, match }) => {
	const [loading, setLoading] = useState(true);
	const [question, setQuestion] = useState({});

	useEffect(() => {
		const slug = match.params.question;
		setLoading(true);
		const unsubscribe = firebase.question(slug).onSnapshot(snapshot => {
			setQuestion(snapshot.data());
			setLoading(false);
		});

		return () => unsubscribe();
	}, [firebase, match]);

	return (
		<>
			<PageHeader img="" title="Code Playground" history={history} />
			<Spinner loading={loading} color="primary" />
			<CodeEditor question={question} />
			<AuthUserContext.Consumer>
				{authUser => (
					<BottomNav
						authUser={authUser}
						firebase={firebase}
						history={history}
						match={match}
						question={question}
					/>
				)}
			</AuthUserContext.Consumer>
		</>
	);
};
export default withAuthentication(Question);
