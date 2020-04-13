/**
 * Collections is a container that fetches firebase data using hooks and renders a list of all collections
 * @prop {Object} authUser - Passed from parent container and has everything about the logged in user
 * @prop {Object} collection - Passed from parent with a title and a path of the collection
 * @prop {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @returns {<QuestionsPage/>} - returns QuestionsPage component which renders the rest of the components
 */

import React from "react";

import QuestionsPage from "../../Collection/QuestionsPage";
import useCollections from "../../../Hooks/useCollections";

const Collections = ({ authUser, collection, firebase, match }) => {
	const collections = useCollections(collection.path, firebase);

	return (
		<QuestionsPage
			authUser={authUser}
			isLoading={collections.isLoading}
			match={match}
			questions={collections.data}
			collectionDetails={{ label: collection.title }}
		/>
	);
};
export default Collections;
