import React from "react";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import MoTitle from "../../MoTitle";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import MoButton from "../../MoButton";

const MoSnackbarCore = ({
  isActive,
  handleClick,
  snackbarProps,
  authUser,
  classes
}) => {
  const [state, setState] = React.useState({
    isActive: isActive,
    Transition: Slide
  });

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
      open={isActive}
      onClose={handleClose}
      TransitionComponent={state.Transition}
    >
      <SnackbarContent
        message={
          <div className={classes.message}>
            <CheckCircleIcon className={classes.checkIcon} />
            <MoTitle
              text={snackbarProps && snackbarProps.title}
              fade={true}
              margin="0 36px 0 0"
            />
          </div>
        }
        className={classes.snackbarContent}
        action={
          <MoButton handleButtonClick={() => handleButtonClick()} text="Next">
            {snackbarProps && snackbarProps.buttonText}
            {snackbarProps && snackbarProps.buttonIcon}
          </MoButton>
        }
      ></SnackbarContent>
    </Snackbar>
  );
};

export default withStyles(styles)(MoSnackbarCore);
