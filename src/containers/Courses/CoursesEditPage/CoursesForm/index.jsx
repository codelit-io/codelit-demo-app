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

import Grid from "@material-ui/core/Grid";

const NewCourseForm = lazy(() => import("components/shared/NewCourseForm"));

const CoursesForm = ({
  authUser,
  collectionDetails,
  firebase,
  itemUrl,
  isAdmin,
  newItem
}) => {
  return (
    <MoPage title={collectionDetails?.title}>
      <Grid container spacing={4} alignItems="center">
        {/* {history.location.pathname === ROUTES.ADMIN_COURSES.path && */}
        {/* userRole.isAdmin && ( */}
        <NewCourseForm authUser={authUser} firebase={firebase} />
        {/* )} */}
      </Grid>
      <Footer />
    </MoPage>
  );
};

export default CoursesForm;
