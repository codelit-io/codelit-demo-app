/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Snackbar Component 🍿
 *
 * Message snackbar notification, with click handlers and customizable text and Icon
 *
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
 * @param {CallableFunction} handleClick - Callback function when clicking the snackbar button
 * @param {Object} snackbarProps - Contains snackbar title and button text. eg {isActive: boolean, buttonText: string, buttonIcon: React Element/Component, title: string}
 * @withStyle - HOC provides classes object to component for styling
 *
 * @see See [Material IU Snackbar](https://material-ui.com/components/snackbars/#snackbar)
 * */

import React, { useEffect } from "react";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import MoTitle from "components/library/MoTitle";
import withStyles from "@material-ui/core/styles/withStyles";
import MoButton from "components/library/MoButton";
import propTypes from "prop-types";
import styles from "./styles";

const MoSnackBar = ({ authUser, classes, handleClick, snackbarProps }) => {
  const [state, setState] = React.useState({
    isActive: snackbarProps.isActive,
    Transition: Slide
  });

  useEffect(() => {
    setState({ isActive: snackbarProps?.isActive });
  }, [snackbarProps]);

  const handleButtonClick = () => {
    setState({
      isActive: false,
      Transition: Slide
    });
    handleClick();
  };

  const handleClose = () => {
    setState({
      ...state,
      Transition: Slide,
      isActive: false
    });
  };

  return (
    <Snackbar
      autoHideDuration={snackbarProps.autoHideDuration}
      open={state.isActive}
      onClose={handleClose}
      TransitionComponent={state.Transition}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <SnackbarContent
        message={
          <div className={classes.message}>
            <CheckCircleIcon className={classes.checkIcon} />
            <MoTitle text={snackbarProps.title} fade margin="0 36px 0 0" />
          </div>
        }
        className={classes.snackbarContent}
        action={
          <MoButton
            handleButtonClick={() => handleButtonClick()}
            text={snackbarProps.buttonText}
          >
            {snackbarProps.buttonText}
            {snackbarProps.buttonIcon}
          </MoButton>
        }
      />
    </Snackbar>
  );
};

MoSnackBar.propTypes = {
  authUser: propTypes.object,
  classes: propTypes.object,
  handleClick: propTypes.func.isRequired,
  snackbarProps: propTypes.shape({
    autoHideDuration: propTypes.oneOf([1000, 2000, 3000, 4000, 5000, null]),
    buttonText: propTypes.string,
    buttonIcon: propTypes.object,
    isActive: propTypes.bool.isRequired,
    title: propTypes.string
  }).isRequired
};
export default withStyles(styles)(MoSnackBar);
