import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/button";
import { Link } from "react-router-dom";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoLink = ({ classes, href, text }) => {
  return (
    <Button component={Link} to={href ? href : "#"} className={classes.link}>
      {text}
      <ArrowForwardIcon className={classes.arrow} />
    </Button>
  );
};

export default withStyles(styles)(MoLink);
