import React from "react";

import { Link } from "react-router-dom";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoButton = ({ classes, href, text }) => {
  return (
    <>
      <Link to={href ? href : "#"} className={classes.link}>
        {text}
      </Link>
    </>
  );
};

export default withStyles(styles)(MoButton);
