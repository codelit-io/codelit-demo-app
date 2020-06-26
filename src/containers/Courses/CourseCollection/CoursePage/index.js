/**
 * Displays the grid for the lessons containing question cards and progress for the course
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} collectionDetails - Passes information about the course/collection such as title and other flags
 * @param {Boolean} isLoading - Loading flag passed from parent container
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Array} courses - List of courses passed down from parent container
 * @param {requestCallback} calculateProgress - callback function to calculate progress, pass it authUser, points, and length of questions in the course
 */

import React, { useState } from "react";

import CourseList from "./CourseList";
import Fade from "@material-ui/core/Fade";
import Footer from "components/shared/Footer";
import Grid from "@material-ui/core/Grid";
import MoPage from "components/library/MoPage";
import MoProgressBar from "components/library/MoProgressBar";
import MoPageSubtitle from "components/library/MoPageSubtitle";

const CoursePage = ({
  authUser,
  collectionDetails,
  isLoading,
  match,
  courses,
  calculateProgress
}) => {
  const [points] = useState(0);
  return (
    <MoPage title={collectionDetails?.title} isLoading={isLoading}>
      <Grid container spacing={4}>
        <Fade
          in={!isLoading && true}
          mountOnEnter
          timeout={{ enter: 800 }}
          unmountOnExit
        >
          <CourseList courses={courses} points={points} />
        </Fade>
        <Fade
          in={!isLoading}
          mountOnEnter
          timeout={{ enter: 2400 }}
          unmountOnExit
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {collectionDetails.isProgressBar && (
              <>
                <MoPageSubtitle margin="0px 0 36px" width="100%">
                  Your Progress
                </MoPageSubtitle>

                <MoProgressBar
                  authUser={authUser}
                  points={points}
                  progress={calculateProgress(
                    authUser,
                    points,
                    courses?.length
                  )}
                />
              </>
            )}
          </Grid>
        </Fade>
      </Grid>
      <Footer />
    </MoPage>
  );
};

export default CoursePage;
