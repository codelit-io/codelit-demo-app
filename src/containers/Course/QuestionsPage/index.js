/**
 * Course page contains layout styling for the page, progress status, and a list of questions
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Array} courses - List of courses passed to this component from the db
 * @param {Object} courseDetails - Contains details about the course we are looking at, this is queried from the db
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Number} points - Number of points the user has for this course
 */

import React from "react";

import calculateProgress from "./calculateProgress";
import Fade from "@material-ui/core/Fade";
import Footer from "components/shared/Footer";
import Grid from "@material-ui/core/Grid";
import QuestionList from "./QuestionList";
import MoPage from "components/library/MoPage";
import MoPointsGroup from "components/library/MoPointsGroup";

const QuestionsPage = ({
  authUser,
  courses,
  courseDetails,
  isLoading,
  match,
  points
}) => (
  <MoPage title={courseDetails?.data?.title} isLoading={isLoading}>
    <Grid container spacing={4} alignItems="center">
      <Fade
        in={!isLoading}
        mountOnEnter
        timeout={{ enter: 1200 }}
        unmountOnExit
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MoPointsGroup
            authUser={authUser}
            points={points}
            progress={calculateProgress(authUser, points, courses.data?.length)}
          />
        </Grid>
      </Fade>
      <Fade in={!isLoading} mountOnEnter timeout={{ enter: 800 }} unmountOnExit>
        <QuestionList
          authUser={authUser}
          match={match}
          points={points}
          questions={courses.data}
          url={match?.params?.collection}
        />
      </Fade>
    </Grid>
    <Footer />
  </MoPage>
);

export default QuestionsPage;
