import React, { useEffect, useState } from "react";

import { AuthUserContext } from "../../../components/Session";
import BottomNav from "../../../components/BottomNav";
import CodeEditor from "../../../components/CodeEditor";
import PageHeader from "../../../components/shared/PageHeader";
import { withAuthentication } from "../../../components/Session";
import Spinner from "../../../components/shared/Spinner";

const Question = ({ firebase, history, match }) => {
	const [loading, setLoading] = useState(false);
	const [question, setQuestion] = useState({});

	// const CodeEditorBase = ({})
	useEffect(() => {
		const questionRoute = match.params.question;
		setLoading(true);
		firebase.getQuestions().on("value", snapshot => {
			const filteredQuestion = snapshot
				.val()
				.filter(
					question => question.label === questionRoute.replace(/-/g, " ")
				);

			/* Future Update */
			/* Fetch data based on post id rather than label */
			/* Fetch individual posts instead of the whole thing */
			/* Use FB collections to help with this */

			setQuestion(filteredQuestion[0]);
			setLoading(false);
		});

		return () => {
			firebase.getQuestions(questionRoute).off();
		};
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
						question={question}
					/>
				)}
			</AuthUserContext.Consumer>
		</>
	);
};
export default withAuthentication(Question);
