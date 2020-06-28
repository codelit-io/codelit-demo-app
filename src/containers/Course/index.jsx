/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Course Container 🎒
 *
 * A Container that fetches firebase data using hooks and renders cards of questions
 *
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns - returns a lesson list on the left column and course tracking info on the right column
 *
 * @see Link [Course Page](https://moskool.com/courses/mo-easy)
 *
 */

import React, { lazy, useEffect, useState } from "react";

import { withAuthentication } from "components/shared/Session";
import useCollectionDetails from "hooks/useCollectionDetails";
import useCollections from "hooks/useCollections";

const QuestionsPage = lazy(() => import("./QuestionsPage"));

const Course = ({ authUser, firebase, match }) => {
  const courseDetails = useCollectionDetails(
    "courses",
    match.params.collection,
    firebase
  );

  const courses = useCollections(
    "courses/" + match.params.collection + "/questions",
    firebase
  );

  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(authUser?.reports?.[match.params.collection]?.points);
  }, [authUser, match]);

  return (
    <QuestionsPage
      authUser={authUser}
      courses={courses}
      courseDetails={courseDetails}
      hasData={courses.data.length && true}
      isLoading={courses.isLoading}
      match={match}
      points={points}
    />
  );
};
export default withAuthentication(Course);
