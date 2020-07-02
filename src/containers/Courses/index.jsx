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
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<CourseCollection/>} - returns component which then the children fetch the correct data
 *
 * @see Link [Courses Page](https://moskool.com/courses)
 *
 */

import React, { lazy, Suspense } from "react";

import { withAuthentication } from "components/shared/Session";
import MoSpinner from "components/library/MoSpinner";
import { retry } from "utils/retryLazyImports";
import PropTypes from "prop-types";

const CourseCollection = lazy(() =>
  retry(() => import("./CourseCollection/index"))
);
const collection = {
  path: "courses",
  title: "Your Courses",
  isProgressBar: false
};

const Courses = ({ authUser, firebase, match }) => (
  <Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
    <CourseCollection
      authUser={authUser}
      collection={collection}
      firebase={firebase}
      match={match}
    />
  </Suspense>
);

Courses.propTypes = {
  authUser: PropTypes.object,
  firebase: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withAuthentication(Courses);
