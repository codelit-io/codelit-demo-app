import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const MoSpinner = ({ isLoading, color, classes }) => {
  return (
    isLoading && <CircularProgress className={classes.spinner} color={color} />
  );
};

export default withStyles(styles)(MoSpinner);
