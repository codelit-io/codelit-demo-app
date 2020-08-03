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

import React, { lazy, useEffect, useState, useCallback } from "react";

import Container from "@material-ui/core/Container";
import { withAuthentication } from "components/shared/Session";
import useCollectionDetails from "hooks/useCollectionDetails";
import useCollections from "hooks/useCollections";
import useUserRole from "hooks/useUserRole";
import Navigation from "components/shared/Navigation";

const QuestionsPage = lazy(() => import("./QuestionsPage"));

const Questions = ({ authUser, history, firebase, match }) => {
  const userRole = useUserRole(authUser);
  const [points, setPoints] = useState(0);

  const doc = match.params.collection;

  const itemOptions = {
    authUser,
    // Top right component of the card
    // ActionComponent: ,
    doc,
    // Configure url route for each item
    itemUrl: id => `${doc}/${id}`,
    // isItemDisabled is configured based on points and question's id
    isItemDisabled: id => (points ? points < Number(id) - 1 : Number(id) !== 1),
    firebase,
    newItem: { title: "Add a question", url: `${doc}/0/isEditMode` },
    match
  };

  useEffect(() => {
    setPoints(authUser?.reports?.[doc]?.points);
  }, [authUser, doc]);

  // Get details about a course/questions
  const courseDetails = useCollectionDetails(
    { collectionPath: "courses" },
    doc,
    firebase
  );

  // Get list of questions
  const questions = useCollections(
    {
      collectionPath: "courses/" + doc + "/questions",
      data: []
    },
    firebase
  );

  /* Handler to send user to editMode page */
  const handleOnClick = useCallback(() => {
    if (userRole.isAdmin) {
      history.push(`${match.params.collection}/isEditMode`);
    }
  }, [userRole, history, match]);

  if (!questions?.data || !courseDetails.data) {
    return null;
  }

  return (
    <Container maxWidth="lg">
      <Navigation authUser={authUser} firebase={firebase} />
      <QuestionsPage
        questions={questions.data}
        courseDetails={courseDetails}
        hasData={questions.data.length && true}
        handleOnClick={e => handleOnClick(e)}
        isAdmin={userRole.isAdmin}
        isLoading={questions.data && false}
        itemOptions={itemOptions}
        points={points}
      />
    </Container>
  );
};

export default withAuthentication(false)(Questions);
