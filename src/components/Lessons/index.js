import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import LessonsList from "./LessonsList";
import MoPage from "../shared/MoPage";
import MoProgressBar from "../shared/MoProgressBar";
import MoPageSubtitle from "../shared/MoPageSubtitle";

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
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <MoPageSubtitle
              text={collectionDetails.isProgressBar && "Your Progress"}
              fade={true}
              margin="0px 0 36px"
              width="100%"
            ></MoPageSubtitle>
            {collectionDetails.isProgressBar && (
              <>
                <MoProgressBar
                  authUser={authUser}
                  points={points}
                  progress={calculateProgress(
                    authUser,
                    points,
                    questions?.length
                  )}
                />
              </>
            )}
          </Grid>
        </Grid>
      )}
    </MoPage>
  );
};

export default Lessons;
