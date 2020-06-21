import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const MoLinkButton = ({ classes, children, href, text }) => {
  const hrefProp = href || "#";

  return (
    <Button component={Link} to={hrefProp} className={classes.link}>
      {text} {children}
      <ArrowForwardIcon className={`${classes.icon} arrow`} />
    </Button>
  );
};

export default withStyles(styles)(MoLinkButton);
