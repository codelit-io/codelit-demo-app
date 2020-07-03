/**
 * Displays the grid for the lessons containing question cards and progress for the course
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} collectionDetails - Passes information about the course/collection such as title and other flags
 * @param {Boolean} isLoading - Loading flag passed from parent container
 * @param {Array} courses - List of courses passed down from parent container
 * @param {requestCallback} calculateProgress - callback function to calculate progress, pass it authUser, points, and length of questions in the course
 */

import React, { useState } from "react";

import CourseList from "./CourseList";
import Fade from "@material-ui/core/Fade";
import Footer from "components/shared/Footer";
import Grid from "@material-ui/core/Grid";
import MoPage from "components/library/MoPage";
import MoPointsGroup from "components/library/MoPointsGroup";

const CoursePage = ({
  authUser,
  collectionDetails,
  isLoading,
  courses,
  calculateProgress
}) => {
  const [points] = useState(0);
  return (
    <MoPage title={collectionDetails?.title} isLoading={isLoading}>
      <Grid container spacing={4} alignItems="center">
        <Fade
          in={!isLoading}
          mountOnEnter
          timeout={{ enter: 1200 }}
          unmountOnExit
        >
          <CourseList
            authUser={authUser}
            courses={courses}
            collectionPath={"courses"}
            points={points}
          />
        </Fade>
      </Grid>
      <Footer />
    </MoPage>
  );
};

export default CoursePage;
