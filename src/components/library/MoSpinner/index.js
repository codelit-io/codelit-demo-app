/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Spinner Component ⏳
 *
 * Displays  a spinning animation fixed in the middle  of the screen
 *
 * @param {Boolean} isLoading - Displays  spinner if true
 * @param {String} color - Color of spinner
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
 * @returns {<CircularProgress/>} - returns component which then the children fetch the correct data
 *
 * @see See [Material-UI progress](https://material-ui.com/components/progress/#progress)
 * */

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

const MoSpinner = ({ isLoading, color, classes }) => {
  return (
    isLoading && <CircularProgress className={classes.spinner} color={color} />
  );
};

export default withStyles(styles)(MoSpinner);
