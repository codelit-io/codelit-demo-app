/**
 * Collections is a container that fetches firebase data using hooks and renders a list of all collections
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} collection - Passed from parent with a title and a path of the collection
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @returns {<CoursePage/>} - returns CoursePage component which contains the rest of the components
 */

import React, { lazy } from 'react';
import useCollections from 'hooks/useCollections';
import calculateProgress from 'containers/Course/QuestionsPage/calculateProgress';

const CoursePage = lazy(() => import('./CoursePage'));

const CourseCollection = ({ authUser, collection, history, firebase, match }) => {
  const collections = useCollections(
    {
      collectionPath: collection.path,
      locationHash: history.location.hash
    },
    firebase,
  );

  if (!collections || !collections?.data.length) {
    return null;
  }
  return (
    <CoursePage
      authUser={authUser}
      isLoading={collections.isLoading}
      calculateProgress={calculateProgress}
      courses={collections.data}
      collectionDetails={{
        title: collection.title,
        isProgressBar: collection.isProgressBar,
      }}
    />
  );
};
export default CourseCollection;
