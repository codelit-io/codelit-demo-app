/**
 * Collections is a container that fetches firebase data using hooks and renders a list of all collections
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} collection - Passed from parent with a title and a path of the collection
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @returns {<CoursePage/>} - returns CoursePage component which contains the rest of the components
 */

import React, { lazy } from "react";

import Footer from "components/shared/Footer";
import MoPage from "components/library/MoPage";
import useCollections from "hooks/useCollections";
import useUserRole from "hooks/useUserRole";

import Grid from "@material-ui/core/Grid";

const CardList = lazy(() => import("components/shared/CardList"));

const CoursesPage = ({ authUser, collection, history, itemUrl, firebase }) => {
  const userRole = useUserRole(authUser);

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
    <MoPage title={collectionDetails?.title}>
      <Grid container spacing={4} alignItems="center">
        <CardList
          authUser={authUser}
          items={courses.data}
          isAdmin={userRole.isAdmin}
          itemUrl={doc => itemUrl(doc)}
          isItemDisabled={() => {}}
        />
      </Grid>
      <Footer />
    </MoPage>
  );
};

export default CoursesPage;
