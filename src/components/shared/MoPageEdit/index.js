import React from "react";

import styles from "./styles";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "recompose";
import MoPageHeaderEdit from "../MoPageHeaderEdit";
import MoSpinner from "../MoSpinner";
import MoPageSubtitleEdit from "../MoPageSubtitleEdit";

const MoPageEdit = ({ classes, children, isLoading, subtitle, title }) => {
  return isLoading ? (
    <MoSpinner isLoading={isLoading} color="primary" />
  ) : (
    <section className={classes.section}>
      {title && <MoPageHeaderEdit title={title} />}
      {subtitle && <MoPageSubtitleEdit subtitle={subtitle} />}
      {children}
    </section>
  );
};

export default compose(withRouter, withStyles(styles))(MoPageEdit);
