/**
 * This container fetches question data and user roles. Then it renders the questions page
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Object} history - Provides several different implementations for managing session history in JavaScript in various environments - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<QuestionPage/>} - returns CodeEditor component which renders the rest of the components
 */

import React, { useCallback, useState } from "react";

import * as ROUTES from "constants/routes";
import withAuthentication from "components/shared/Session/withAuthentication";

import useUserRole from "hooks/useAuthUserRole";
import useQuestion from "hooks/useQuestion";
import QuestionPage from "./QuestionPage";

const QuestionView = ({ authUser, firebase, history, match }) => {
	const { data, isLoading } = useQuestion({
		firebase,
		questionId: match.params.questionId,
		questionPath: "courses/" + match.params.collection + "/questions",
	});

	const [userRole] = useState(useUserRole(authUser));

	/* Handler to send user to editMode page */
	const handleOnClick = useCallback(() => {
		/* TODO: Fix  me */
		if (userRole.isAdmin) {
			history.push(`${data.id}/isEditMode`);
		}
	}, [userRole, history, data]);

	const handleNavigation = useCallback(
		(id) => {
			/* A delay before navigating to a new page */
			setTimeout(() => {
				history.push(
					ROUTES.COLLECTIONS.path + "/" + match.params.collection + "/" + id
				);
			}, 600);
		},
		[history, match]
	);

	if (!data) {
		return null;
	}

	return (
		<QuestionPage
			authUser={authUser}
			firebase={firebase}
			isLoading={isLoading}
			handleOnClick={() => handleOnClick()}
			handleNavigation={(id) => handleNavigation(id)}
			match={match}
			data={data}
		/>
	);
};

export default withAuthentication(QuestionView);
