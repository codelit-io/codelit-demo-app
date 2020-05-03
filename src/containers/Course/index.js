/**
 * A Container that fetches firebase data using hooks and renders cards of questions
 * @prop {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns - returns a lesson list on the left column and course tracking info on the right column
 */

import React, { useEffect, useState } from "react";

import { withAuthentication } from "../../components/Session";
import Grid from "@material-ui/core/Grid";
import LessonsList from "../../components/Lessons/LessonsList";
import calculateProgress from "./calculateProgress";
import MoPage from "../../components/shared/MoPage";
import useCollectionDetails from "../../Hooks/useCollectionDetails";
import useCollections from "../../Hooks/useCollections";
import MoPageSubtitle from "../../components/shared/MoPageSubtitle";
import MoProgressBar from "../../components/shared/MoProgressBar";

const Course = ({ authUser, firebase, match }) => {
  const courseDetails = useCollectionDetails(
    "courses",
    match.params.collection,
    firebase
  );

  const courses = useCollections(
    "courses/" + match.params.collection + "/questions",
    firebase
  );

  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(authUser?.reports?.[match.params.collection]?.points);
  }, [authUser, match]);

  return (
    <MoPage
      title={courseDetails?.data?.title}
      isLoading={courseDetails.isLoading || courses.isLoading}
    >
      <Grid container spacing={4} style={{ flexFlow: "wrap-reverse" }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <LessonsList
            authUser={authUser}
            match={match}
            points={points}
            questions={courses.data}
            url={match?.params?.collection}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <>
            <MoPageSubtitle
              text={"Your Progress"}
              fade={true}
              margin="0px 0 36px"
              width="100%"
            ></MoPageSubtitle>
            <MoProgressBar
              authUser={authUser}
              points={points}
              progress={calculateProgress(
                authUser,
                points,
                courses.data?.length
              )}
            />
          </>
        </Grid>
      </Grid>
    </MoPage>
  );
};
export default withAuthentication(Course);
