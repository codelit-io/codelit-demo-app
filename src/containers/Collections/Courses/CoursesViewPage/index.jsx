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

import { COURSES } from "constants/i18n";
import PropTypes from "prop-types";
import useCollections from "hooks/useCollections";
import CardProgress from "components/shared/CardList/CardItem/CardProgress";
import useGlobal from "store";

const CoursesPage = lazy(() => import("./CoursesPage"));
const collection = {
  path: "courses",
  title: COURSES.PAGE_TITLE,
  isProgressBar: false
};

const CoursesViewPage = ({ history, match }) => {
  const [{ authUser, userRole, firebase }] = useGlobal();
  const itemOptions = {
    authUser,
    ActionComponent: CardProgress,
    itemUrl: (doc) => `/courses/${doc}`,
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

  const courses = useCollections(collectionDetails, firebase);

  if (!courses || !courses?.data?.length) {
    return null;
  }

  return (
    <CoursesPage
      authUser={authUser}
      collectionDetails={collectionDetails}
      courses={courses.data}
      isLoading={courses.isLoading}
      firebase={firebase}
      itemOptions={itemOptions}
      isAdmin={userRole?.isAdmin}
    />
  );
};

CoursesViewPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default CoursesViewPage;
