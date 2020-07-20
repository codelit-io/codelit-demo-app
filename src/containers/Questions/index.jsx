/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Questions Container 🎒
 *
 * A Container that fetches firebase data using hooks and renders cards of questions
 *
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns - returns a lesson list on the left column and course tracking info on the right column
 *
 * @see Link [Questions Page](https://moskool.com/courses/mo-easy)
 *
 */

import React, { lazy, useEffect, useState } from "react";

import * as ROUTES from "constants/routes";
import { COURSES, SIGN_UP } from "constants/i18n";
import { withAuthentication } from "components/shared/Session";
import useCollectionDetails from "hooks/useCollectionDetails";
import useCollections from "hooks/useCollections";
import useUserRole from "hooks/useUserRole";

const QuestionsPage = lazy(() => import("./QuestionsPage"));

const Questions = ({ authUser, firebase, match }) => {
  const collectionPath = "courses/" + match.params.collection + "/questions";
  const userRole = useUserRole(authUser);

  const courseDetails = useCollectionDetails(
    { collectionPath: "courses" },
    match.params.collection,
    firebase
  );

  const questions = useCollections(
    {
      collectionPath,
      data: []
    },
    firebase
  );

  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(authUser?.reports?.[match.params.collection]?.points);
  }, [authUser, match]);

  if (!questions?.data || !courseDetails.data) {
    return null;
  }

  /* TODO: Move to global initial state  */
  const questionsWithOptions = [
    userRole.isAdmin
      ? {
          type: "new",
          title: COURSES.ADD_A_COURSES,
          url: ROUTES.COLLECTIONS_ADD.path
        }
      : {
          type: "signup",
          title: SIGN_UP.CORE,
          subtitle: SIGN_UP.SIGN_UP_TO_EARN_REWARDS,
          url: ROUTES.SIGN_UP.path
        },
    ...questions.data
  ];

  return (
    <QuestionsPage
      authUser={authUser}
      questions={questionsWithOptions}
      courseDetails={courseDetails}
      hasData={questionsWithOptions.length && true}
      isLoading={questions.isLoading && false}
      match={match}
      points={points}
    />
  );
};
export default withAuthentication(Questions);
