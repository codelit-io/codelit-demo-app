/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Courses Container 🎒
 *
 * A Container contains a list of courses created by MoSkool and a list of courses created by the community
 *
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @withFirebase - HOC provides firebase instance to access db and back-end
 * @returns {<CoursesOrg/>} - returns component which then the children fetch the correct data
 *
 * @see Link [Courses Page](https://moskool.com/courses)
 *
 */

import React, { lazy } from "react";

import * as ROUTES from "constants/routes";
import { COURSES } from "constants/i18n";
import Container from "@material-ui/core/Container";
import Navigation from "components/shared/Navigation";
import PropTypes from "prop-types";
import useGlobal from "store";

const CoursesForm = lazy(() => import("./CoursesForm"));
const collection = {
  path: "courses",
  title: COURSES.NEW_COURSE,
  isProgressBar: false,
};

// Configure url route for each item
const itemUrl = (doc) => `/courses/${doc}`;

const CoursesEditPage = ({ history, match }) => {
  const [{ authUser, firebase, userRole }] = useGlobal();

  const collectionDetails = {
    collectionPath: collection.path,
    data: [],
    isProgressBar: collection.isProgressBar,
    locationHash: history.location.hash,
    title: collection.title,
  };

  // Initial dummy data
  const courses = { isLoading: false, data: [{ id: 1, question: "" }] };
  const newItem = { title: "Add a question", url: "" };

  if (!courses || !courses?.data?.length) {
    return null;
  }

  if (!userRole?.isAdmin) {
    // TODO: Navigate to not authorized page
    history.push(ROUTES.SIGN_IN.path);
  }

  return (
    <Container maxWidth="lg">
      <Navigation authUser={authUser} firebase={firebase} />
      <CoursesForm
        authUser={authUser}
        collectionDetails={collectionDetails}
        courses={courses}
        history={history}
        isAdmin={userRole?.isAdmin}
        firebase={firebase}
        match={match}
        itemUrl={(doc) => itemUrl(doc)}
        newItem={newItem}
      />
    </Container>
  );
};

CoursesEditPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default CoursesEditPage;
