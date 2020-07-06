/**
 * MoLink
 * Browser and Editor mocks are styled to look like a browser to frame the code editor and preview panels
 *
 * @param {String} href - required route to navigate to, otherwise it will be a # for route
 * @param {String} text - text displayed for the button
 */

import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const MoLink = ({ classes, href, handleButtonClick, text }) => {
  /* Make sure href isn't set to prevent router link errors */
  const hrefProp = href || "#";

  /* Prevent errors when handleButtonClick not available  */
  const handleOnCLick = e => {
    return handleButtonClick ? handleButtonClick(e) : null;
  };

  return (
    <Button
      onClick={handleOnCLick}
      component={Link}
      to={hrefProp}
      className={classes.link}
    >
      {text}
      <ArrowForwardIcon className={`${classes.icon} arrow`} />
    </Button>
  );
};

export default withStyles(styles)(MoLink);
