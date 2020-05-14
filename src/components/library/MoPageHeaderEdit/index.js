import React from "react";

import Fade from "@material-ui/core/Fade";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoPageHeaderEdit = ({ children, classes, title, register, name }) => {
  return (
    <Fade in={(title || children) && true} timeout={{ enter: 800 }}>
      <input
        ref={register}
        className={`${classes.title} MuiTypography-h2`}
        placeholder={title || children}
        defaultValue={title || children}
        name={name}
      />
    </Fade>
  );
};

export default withStyles(styles)(MoPageHeaderEdit);
