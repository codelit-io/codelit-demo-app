/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Hint Component
 *
 * Editable text field, used with react-hook-form to pass form data to parent
 * Used in QuestionForm Component as a hint for questions
 *
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
 * @param {Object} children - Child components that are being wrapped by this component
 * @param {Object} text - Child components that are being wrapped by this component
 * @param {Object} register - Comes from useForm() hook, registers the  input with the parent form
 * @param {Object} name - Reference name for input
 *
 *
 * */
import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Fade from "@material-ui/core/Fade";
import styles from "./styles";

const MoHintEdit = ({ classes, children, text, register, name }) => (
  <Fade
    timeout={{ enter: 800, exit: 800 }}
    mountOnEnter
    in={text && true}
    unmountOnExit
  >
    <div className={classes.container}>
      <input
        ref={register}
        className={`${classes.text} MuiTypography-h6`}
        placeholder={text || children}
        defaultValue={text || children}
        name={name}
      />
    </div>
  </Fade>
);

export default withStyles(styles)(MoHintEdit);
