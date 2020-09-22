import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const MoPageContentEdit = ({
  classes,
  children,
  text,
  name,
  placeholder,
  register,
}) => {
  return (
    <input
      className={`${classes.text} MuiTypography-h6`}
      name={name}
      placeholder={text || children || placeholder}
      defaultValue={text || children}
      ref={register}
    />
  );
};

export default withStyles(styles)(MoPageContentEdit);
