/**
 * Course page contains layout styling for the page, progress status, and a list of questions
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Array} courses - List of courses passed to this component from the db
 * @param {Object} courseDetails - Contains details about the course we are looking at, this is queried from the db
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Number} points - Number of points the user has for this course
 */

import React, { lazy } from "react";

import calculateProgress from "./calculateProgress";
import Footer from "components/shared/Footer";
import Grid from "@material-ui/core/Grid";
import MoPage from "components/library/MoPage";
import MoPointsGroup from "components/library/MoPointsGroup";
import MoButtonIcon from "components/library/MoButtonIcon";

const CardList = lazy(() => import("components/shared/CardList"));

const QuestionsPage = ({
  questions,
  courseDetails,
  handleOnClick,
  isLoading,
  itemOptions,
  isAdmin,
  points
}) => {
  const IconComponent = () => (
    <MoButtonIcon editIcon={true} handleIconClick={e => handleOnClick(e)} />
  );
  return (
    <MoPage
      title={courseDetails?.data?.title}
      IconComponent={isAdmin && IconComponent}
      isLoading={isLoading}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MoPointsGroup
            authUser={itemOptions.authUser}
            points={points}
            progress={calculateProgress(questions?.length, points)}
          />
        </Grid>
        <CardList
          isAdmin={isAdmin}
          items={questions}
          itemOptions={itemOptions}
        />
      </Grid>
      <Footer />
    </MoPage>
  );
};

export default QuestionsPage;
