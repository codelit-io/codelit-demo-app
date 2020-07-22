import React from "react";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const MoButtonIcon = ({ editIcon, handleIconClick }) =>
  editIcon && (
    <IconButton size="medium" onClick={e => handleIconClick(e)}>
      <EditIcon color="primary" fontSize="large" />
    </IconButton>
  );

export default MoButtonIcon;
