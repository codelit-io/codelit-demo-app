/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Courses Container 🎒
 *
 * A Container contains a list of courses created by MoSkool and a list of courses created by the community
 *
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @withFirebase - HOC provides firebase instance to access db and back-end
 * @returns {<CoursesOrg/>} - returns component which then the children fetch the correct data
 *
 * @see Link [Courses Page](https://moskool.com/courses)
 *
 */

import React, { lazy, Suspense } from "react";

import { retry } from "utils/retryLazyImports";
import { COURSES } from "constants/i18n";
import MoSpinner from "components/library/MoSpinner";
import PropTypes from "prop-types";
import { withAuthentication } from "components/shared/Session";

const CoursesPage = lazy(() => retry(() => import("./CoursesPage")));
const collection = {
  path: "courses",
  title: COURSES.PAGE_TITLE,
  isProgressBar: false
};

// Configure url route for each item
const itemUrl = doc => `/courses/${doc}`;

const Courses = ({ authUser, firebase, history, match }) => (
  <Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
    <CoursesPage
      authUser={authUser}
      collection={collection}
      history={history}
      firebase={firebase}
      match={match}
      itemUrl={doc => itemUrl(doc)}
    />
  </Suspense>
);

Courses.propTypes = {
  firebase: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withAuthentication(Courses);
