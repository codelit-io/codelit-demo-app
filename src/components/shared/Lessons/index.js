/**
 * Displays the grid for the lessons containing question cards and progress for the course
 * @prop {Object} authUser - Passed from parent container and has everything about the logged in user
 * @prop {Object} collectionDetails - Passes information about the course/collection such as title and other flags
 * @prop {Boolean} isLoading - Loading flag passed from parent container
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @prop {Array} questions - List of questions passed down from parent container
 * @prop {requestCallback} calculateProgress - callback function to calculate progress, pass it authUser, points, and length of questions in the course
 */

import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import LessonsList from "./LessonsList";
import MoPage from "components/library/MoPage";
import MoProgressBar from "components/library/MoProgressBar";
import MoPageSubtitle from "components/library/MoPageSubtitle";

const Lessons = ({
  authUser,
  collectionDetails,
  isLoading,
  match,
  questions,
  calculateProgress,
}) => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(authUser?.reports?.[match.params.collection]?.points);
  }, [authUser, match]);

  return (
    <MoPage title={collectionDetails?.title} isLoading={isLoading}>
      {questions && (
        <Grid container spacing={4} style={{ flexFlow: "wrap-reverse" }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LessonsList
              points={points}
              questions={questions}
              url={match?.params?.collection}
              authUser={authUser}
              match={match}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <MoPageSubtitle margin="0px 0 36px" width="100%">
              Your Progress
            </MoPageSubtitle>

            {collectionDetails.isProgressBar && (
              <MoProgressBar
                authUser={authUser}
                points={points}
                progress={calculateProgress(
                  authUser,
                  points,
                  questions?.length
                )}
              />
            )}
          </Grid>
        </Grid>
      )}
    </MoPage>
  );
};

export default Lessons;
