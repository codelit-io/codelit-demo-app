/**
 * Collections is a container that fetches firebase data using hooks and renders a list of all collections
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} collection - Passed from parent with a title and a path of the collection
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @returns {<CoursePage/>} - returns CoursePage component which contains the rest of the components
 */

import React from "react";

import { withAuthentication } from "components/shared/Session";
import CoursesList from "./components/CoursesList";
import Footer from "components/shared/Footer";
import Grid from "@material-ui/core/Grid";
import MoPage from "components/library/MoPage";
import useCollections from "hooks/useCollections";


const CoursesPage = ({
  authUser,
  collection,
  history,
  firebase,
}) => {

  const collectionDetails = {
    title: collection.title,
    isProgressBar: collection.isProgressBar,
    collectionPath: collection.path,
    locationHash: history.location.hash
  }

  const courses = useCollections(
    collectionDetails,
    firebase
  );


  if (!courses || !courses?.data?.length) {
    return null;
  }

  return (
    <MoPage title={collectionDetails?.title}>
      <Grid container spacing={4} alignItems="center">
        <CoursesList
          authUser={authUser}
          courses={courses.data}
          collectionPath={"courses"}
          points={0}
        />
      </Grid>
      <Footer />
    </MoPage>
  );
};

export default withAuthentication(CoursesPage);
