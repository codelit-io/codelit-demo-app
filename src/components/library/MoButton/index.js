import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import PropTypes from "prop-types";

const MoButton = ({
  classes,
  children,
  handleButtonClick,
  href,
  isArrowIcon,
  text,
  type,
  size,
  variant,
}) => {
  /* Make sure href isn't set to prevent router link errors */
  const hrefProp = href || "#";

  /* Prevent errors when handleButtonClick not available  */
  const handleOnCLick = (e) => {
    return handleButtonClick ? handleButtonClick(e) : null;
  };

  return (
    <Button
      onClick={(e) => handleOnCLick(e)}
      component={Link}
      to={hrefProp}
      type={type}
      className={`${classes.button} ${variant === "text" && classes.noShadow}`}
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

MoButton.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
  handleButtonClick: PropTypes.func,
  href: PropTypes.string,
  isArrowIcon: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "default", null]),
  size: PropTypes.oneOf(["small", "medium", "large", null]),
  type: PropTypes.oneOf(["submit", "button", null]),
  variant: PropTypes.oneOf(["contained", "outlined", "text", null]),
};

export default withStyles(styles)(MoButton);
