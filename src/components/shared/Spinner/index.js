import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./styles";

const Spinner = ({ loading, color }) => {
    const classes = useStyles();

	return loading && <CircularProgress className={classes.spinner} color={color} />;
};

export default Spinner;
