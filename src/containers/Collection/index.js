/**
 * Collections is a container that fetches firebase data using hooks and renders cards of questions 
 * @prop {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @returns {<QuestionsPage/>} - returns QuestionsPage component which renders the rest of the components 
 * @withAuthentication - HOC provides firebase and match props
 */


import React from "react";

import { AuthUserContext, withAuthentication } from "../../components/Session";
import QuestionsPage from "./QuestionsPage";
import useQuestions from "./useQuestions";
import useTopicDetails from "./useTopicDetails";

const Collection = ({ firebase, match }) => {
	const questions = useQuestions(firebase, match);
  const topicDetails = useTopicDetails(firebase, match);
  
	return (
		<AuthUserContext.Consumer>
			{authUser => (
				<QuestionsPage
					authUser={authUser}
					isLoading={topicDetails.isLoading || questions.isLoading}
					match={match}
					questions={questions.data}
					topicDetails={topicDetails.data}
				/>
			)}
		</AuthUserContext.Consumer>
	);
};
export default withAuthentication(Collection);
