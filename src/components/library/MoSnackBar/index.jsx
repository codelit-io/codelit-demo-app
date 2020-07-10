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
 * @param {Object} snackbarProps - Contains snackbar title and button text. eg {isActive: boolean, buttonText: string, title: string}
 * @withStyle - HOC provides classes object to component for styling
 *
 * Example usage
 *
 *    const snackbarProps = {
 *      // auto hide duration
 *      autoHideDuration: 2000
 *      // Triggers the snackbar
 *	    isActive: true,
 *      // Left side Icon component
 *	    IconComponent: <Icons.FlareIcon />,
 *      // Snackbar title
 *	    title: "Need a hint?",
 *      // Text button
 *	    buttonText: "Yes!",
 *      // A callback function after the click
 *	    onClick: (e) => {
 *	    console.log(e);
 *    }
 *  }
 *
 *  <MoSnackbar authUser={authUser} snackbarProps={snackbarProps} />
 *
 *
 *
 *
 * @see See [Material IU Snackbar](https://material-ui.com/components/snackbars/#snackbar)
 * */

import React, { useEffect } from "react";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grow from "@material-ui/core/Grow";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import MoTypography from "components/library/MoTypography";
import withStyles from "@material-ui/core/styles/withStyles";
import MoButton from "components/library/MoButton";
import PropTypes from "prop-types";
import styles from "./styles";

const MoSnackBar = ({ authUser, classes, snackbarProps }) => {
  const {
    autoHideDuration,
    buttonText,
    IconComponent,
    isActive,
    title,
    onClick
  } = snackbarProps;

  const [state, setState] = React.useState({
    isActive,
    Transition: Grow
  });

  useEffect(() => {
    setState({ isActive });
  }, [isActive]);

  const handleButtonClick = e => {
    setState({
      isActive: false,
      Transition: Grow
    });
    onClick && onClick(e);
  };

  const handleClose = () => {
    setState({
      ...state,
      Transition: Grow,
      isActive: false
    });
  };

  return (
    <Snackbar
      open={state.isActive}
      resumeHideDuration={autoHideDuration}
      autoHideDuration={autoHideDuration}
      transitionDuration={{ enter: 400, exit: 400 }}
      onClose={() => handleClose()}
      TransitionComponent={state.Transition}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <SnackbarContent
        message={
          <div className={classes.message}>
            {IconComponent ? (
              <IconComponent className={classes.checkIcon} />
            ) : (
              <CheckCircleIcon className={classes.checkIcon} />
            )}
            <MoTypography color="greyDark" font="breeSerif" variant="h3">
              {title}
            </MoTypography>
          </div>
        }
        className={classes.snackbarContent}
        action={
          <MoButton
            isArrowIcon={true}
            color="primary"
            variant="text"
            size="large"
            handleButtonClick={e => handleButtonClick(e)}
            text={buttonText}
          />
        }
      />
    </Snackbar>
  );
};

MoSnackBar.propTypes = {
  authUser: PropTypes.object,
  classes: PropTypes.object,
  snackbarProps: PropTypes.shape({
    autoHideDuration: PropTypes.oneOf([1000, 2000, 3000, 4000, 5000, null]),
    buttonText: PropTypes.string,
    IconComponent: PropTypes.func,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string
  }).isRequired
};
export default withStyles(styles)(MoSnackBar);
