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
import { withAuthentication } from "components/shared/Session";
import PropTypes from "prop-types";
import useCollections from "hooks/useCollections";
import useUserRole from "hooks/useUserRole";
import CardProgress from "components/shared/CardList/CardItem/CardProgress";

const CoursesPage = lazy(() => import("./CoursesPage"));
const collection = {
  path: "courses",
  title: COURSES.PAGE_TITLE,
  isProgressBar: false
};

const CoursesViewPage = ({ authUser, firebase, history, match }) => {
  const itemOptions = {
    authUser,
    ActionComponent: CardProgress,
    itemUrl: doc => `/courses/${doc}`,
    isItemDisabled: () => {},
    firebase,
    newItem: { title: "Add a course", url: "courses/isEditMode" },
    match
  };

  const collectionDetails = {
    collectionPath: collection.path,
    data: [],
    isProgressBar: collection.isProgressBar,
    locationHash: history.location.hash,
    title: collection.title
  };
  const userRole = useUserRole(authUser);
  const courses = useCollections(collectionDetails, firebase);

  if (!courses || !courses?.data?.length) {
    return null;
  }

  return (
    <CoursesPage
      collectionDetails={collectionDetails}
      courses={courses.data}
      itemOptions={itemOptions}
      isAdmin={userRole.isAdmin}
    />
  );
};

CoursesViewPage.propTypes = {
  firebase: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const isUserRole = false;

export default withAuthentication(isUserRole)(CoursesViewPage);
