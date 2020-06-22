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
import MoProgressBar from "components/library/MoProgressBar";

const QuestionsPage = ({
  authUser,
  courses,
  courseDetails,
  isLoading,
  match,
  points
}) => (
  <MoPage title={courseDetails?.data?.title} isLoading={isLoading}>
    <Grid container spacing={4} style={{ flexFlow: "wrap-reverse" }}>
      <Fade
        in={!isLoading && true}
        mountOnEnter
        timeout={{ enter: 800 }}
        unmountOnExit
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <QuestionList
            authUser={authUser}
            match={match}
            points={points}
            questions={courses.data}
            url={match?.params?.collection}
          />
        </Grid>
      </Fade>
      <Fade
        in={!isLoading}
        mountOnEnter
        timeout={{ enter: 2400 }}
        unmountOnExit
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MoProgressBar
            authUser={authUser}
            points={points}
            progress={calculateProgress(authUser, points, courses.data?.length)}
          />
        </Grid>
      </Fade>
    </Grid>
    <Footer />
  </MoPage>
);

export default QuestionsPage;
