import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const MoPageHeaderEdit = ({
  children,
  classes,
  text,
  register,
  name,
  placeholder
}) => {
  return (
    <input
      ref={register}
      className={`${classes.text} MuiTypography-h2`}
      placeholder={text || children || placeholder}
      defaultValue={text || children}
      name={name}
    />
  );
};

export default withStyles(styles)(MoPageHeaderEdit);
