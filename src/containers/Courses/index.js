/**
 * Courses container contains a list of courses created by MoSkool and a list of courses created by the community
 * @prop {Object} authUser - Passed from parent container and has everything about the logged in user
 * @prop {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<Collections/>} - returns Collections component which then the children fetch the correct data
 */

import React, { lazy } from "react";

import { AuthUserContext, withAuthentication } from "../../components/Session";

const Collections = lazy(() => import("./Collections"));

const collections = [
	{ path: "collections", title: "Your Courses" },
	{ path: "community-collections", title: "Community Courses" },
];

const Courses = ({ firebase, match }) => (
	<AuthUserContext.Consumer>
		{(authUser) =>
			collections.map((collection) => (
				<Collections
					authUser={authUser}
					collection={collection}
					firebase={firebase}
					match={match}
				/>
			))
		}
	</AuthUserContext.Consumer>
);

export default withAuthentication(Courses);
