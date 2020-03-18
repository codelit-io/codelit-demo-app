import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/button";
import { Link } from "react-router-dom";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoLinkButton = ({ classes, href, text }) => {
  return (
    <Button component={Link} to={href ? href : "#"} className={classes.link}>
      {text}
      <ArrowForwardIcon
        className="arrow"
        style={{ fontSize: "1em", paddingLeft: "4px" }}
      />
    </Button>
  );
};

export default withStyles(styles)(MoLinkButton);
