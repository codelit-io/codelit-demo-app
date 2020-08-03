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

import React, { lazy } from "react";

import { COURSES } from "constants/i18n";
import Container from "@material-ui/core/Container";
import Navigation from "components/shared/Navigation";
import PropTypes from "prop-types";
import useUserRole from "hooks/useUserRole";
import useGlobal from "store";

const CoursesForm = lazy(() => import("./CoursesForm"));
const collection = {
  path: "courses",
  title: COURSES.NEW_COURSE,
  isProgressBar: false
};

// Configure url route for each item
const itemUrl = doc => `/courses/${doc}`;

const CoursesEditPage = ({ history, match }) => {
  const [state] = useGlobal();
  const { authUser, firebase } = state;

  const collectionDetails = {
    collectionPath: collection.path,
    data: [],
    isProgressBar: collection.isProgressBar,
    locationHash: history.location.hash,
    title: collection.title
  };
  const userRole = useUserRole(authUser);

  // Initial dummy data
  const courses = { isLoading: false, data: [{ id: 1, question: "" }] };
  const newItem = { title: "Add a question", url: "" };

  if (!courses || !courses?.data?.length) {
    return null;
  }

  return (
    <Container maxWidth="lg">
      <Navigation authUser={authUser} firebase={firebase} />
      <CoursesForm
        authUser={authUser}
        collectionDetails={collectionDetails}
        courses={courses}
        history={history}
        isAdmin={userRole.isAdmin}
        firebase={firebase}
        match={match}
        itemUrl={doc => itemUrl(doc)}
        newItem={newItem}
      />
    </Container>
  );
};

CoursesEditPage.propTypes = {
  firebase: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default CoursesEditPage;
