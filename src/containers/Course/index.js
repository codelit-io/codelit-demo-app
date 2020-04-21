/**
 * A Container that fetches firebase data using hooks and renders cards of questions
 * @prop {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<Lessons/>} - returns Lessons component which renders the course with it's lessons
 */

import React from "react";

import { AuthUserContext, withAuthentication } from "../../components/Session";
import Lessons from "../../components/Lessons";
import calculateProgress from "./calculateProgress";
import useCollectionDetails from "../../Hooks/useCollectionDetails";
import useCollections from "../../Hooks/useCollections";

const Course = ({ firebase, match }) => {
  const courseDetails = useCollectionDetails(
    "courses",
    match.params.collection,
    firebase
  );

  const courses = useCollections(
    "courses/" + match.params.collection + "/questions",
    firebase
  );

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <Lessons
          authUser={authUser}
          isLoading={courseDetails.isLoading || courses.isLoading}
          match={match}
          questions={[...courses.data]}
          collectionDetails={{
            ...courseDetails.data,
            isProgressBar: true,
          }}
          calculateProgress={calculateProgress}
        />
      )}
    </AuthUserContext.Consumer>
  );
};
export default withAuthentication(Course);
