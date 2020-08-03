import React from "react";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const MoButtonIcon = ({ editIcon, handleIconClick }) =>
  editIcon && (
    <IconButton onClick={e => handleIconClick(e)}>
      <EditIcon color="primary" fontSize="medium" />
    </IconButton>
  );

export default MoButtonIcon;
