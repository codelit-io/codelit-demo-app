import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const Spinner = ({ loading, color, classes }) => {
  return (
    loading && <CircularProgress className={classes.spinner} color={color} />
  );
};

export default withStyles(styles)(Spinner);
