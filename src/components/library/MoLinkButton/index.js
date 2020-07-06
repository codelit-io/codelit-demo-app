import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import PropTypes from "prop-types";

const MoLinkButton = ({
  classes,
  children,
  handleButtonClick,
  href,
  isArrowIcon,
  text,
  size,
  variant
}) => {
  /* Make sure href isn't set to prevent router link errors */
  const hrefProp = href || "#";

  /* Prevent errors when handleButtonClick not available  */
  const handleOnCLick = e => {
    return handleButtonClick ? handleButtonClick(e) : null;
  };

  return (
    <Button
      onClick={e => handleOnCLick(e)}
      component={Link}
      to={hrefProp}
      className={classes.button}
      color={"primary"}
      size={size}
      variant={variant}
      endIcon={
        isArrowIcon && <ArrowForwardIcon className={`${classes.icon} arrow`} />
      }
    >
      {text} {children}
    </Button>
  );
};

MoLinkButton.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
  handleButtonClick: PropTypes.func,
  href: PropTypes.string,
  isArrowIcon: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "default", null]),
  size: PropTypes.oneOf(["small", "medium", "large", null]),
  variant: PropTypes.oneOf(["contained", "outlined", "text", null])
};

export default withStyles(styles)(MoLinkButton);
