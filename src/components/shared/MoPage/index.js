import React from "react";

import styles from "./styles";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "recompose";
import MoPageHeader from "../MoPageHeader";
import Spinner from "../Spinner";
import MoPageSubtitle from "../MoPageSubtitle";
import { Grid } from "@material-ui/core";

const MoPage = ({
  classes,
  children,
  isLoading,
  subtitle,
  title,
  Component
}) => {
  return isLoading ? (
    <Spinner isLoading={isLoading} color="primary" />
  ) : (
    <Grid container className={classes.section}>
      <Grid item xs={12} sm={6} md={6}>
        <MoPageHeader title={title} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} className={classes.component}>
        {Component && <Component />}
        {subtitle && <MoPageSubtitle subtitle={subtitle} />}
      </Grid>

      <section className={classes.content}>{children}</section>
    </Grid>
  );
};

export default compose(withRouter, withStyles(styles))(MoPage);
