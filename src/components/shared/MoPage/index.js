import React from "react";

import styles from "./styles";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "recompose";
import MoPageHeader from "../MoPageHeader";
import MoSpinner from "../MoSpinner";
import MoPageSubtitle from "../MoPageSubtitle";

const MoPage = ({ classes, children, isLoading, subtitle, title }) => {
  return isLoading ? (
    <MoSpinner isLoading={isLoading} color="primary" />
  ) : (
    <section className={classes.section}>
      {title && <MoPageHeader title={title} />}
      {subtitle && <MoPageSubtitle subtitle={subtitle} />}
      {children}
    </section>
  );
};

export default compose(withRouter, withStyles(styles))(MoPage);
