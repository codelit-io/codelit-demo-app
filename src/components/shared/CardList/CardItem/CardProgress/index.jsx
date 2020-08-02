import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import CheckIcon from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";

const CardProgress = ({ authUser, item }) => {
  let points;
  debugger;
  try {
    points = authUser?.reports[item?.doc].points;
  } catch {}
  const progress =
    /* TODO: This should come form teh --stats-- doc in each collection */
    /* BROKEN!! */
    item?.itemsLength &&
    points &&
    Math.round((points / item?.itemsLength) * 100);

  const finishedCourse =
    progress === 100 ? <CheckIcon /> : progress && `${progress}%`;
  return (
    <Box position="fixed" display="inline-flex" top={16} right={16}>
      <CircularProgress variant="static" value={progress} color="secondary" />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
          style={{ lineHeight: progress === 100 && "0.66" }}
        >
          {finishedCourse}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardProgress;
