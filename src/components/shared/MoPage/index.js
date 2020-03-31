import React from "react";

import styles from "./styles";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "recompose";
import MoPageHeader from "../MoPageHeader";
import Spinner from "../Spinner";
import MoPageSubtitle from "../MoPageSubtitle";
import { Grid } from "@material-ui/core";

const MoPage = ({ classes, children, loading, subtitle, title, Component }) => {
  return (
    <Grid container className={classes.section}>
      <Grid item md={6}>
        <MoPageHeader title={title} />
      </Grid>
      <Grid item md={6} className={classes.component}>
        {Component && <Component />}
        {subtitle && <MoPageSubtitle subtitle={subtitle} />}
      </Grid>
      <Spinner loading={loading} color="primary" />
      <section className={classes.content}>{children}</section>
    </Grid>
  );
};

export default compose(withStyles(styles), withRouter)(MoPage);
