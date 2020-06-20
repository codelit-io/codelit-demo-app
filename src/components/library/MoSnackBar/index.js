import React from "react";

import MoSnackbarCore from "./MoSnackbarCore";

const MoSnackbarContainer = ({
  isActive,
  authUser,
  snackbarProps,
  triggerNextQuestion
}) => {
  return (
    <MoSnackbarCore
      isActive={isActive}
      authUser={authUser}
      handleClick={() => triggerNextQuestion()}
      snackbarProps={snackbarProps}
    />
  );
};

const MoSnackbar = React.memo(MoSnackbarContainer);

export default MoSnackbar;
