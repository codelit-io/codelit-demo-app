import React from "react";

import styles from "./styles";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "recompose";
import MoPageHeader from "../MoPageHeader";
import MoSpinner from "../MoSpinner";
import MoPageSubtitle from "../MoPageSubtitle";

const MoPage = ({
  classes,
  children,
  handleOnClick,
  isAdmin,
  isLoading,
  subtitle,
  title,
}) => {
  if (isLoading) {
    return <MoSpinner isLoading={isLoading} color="primary" />;
  }
  return (
    <section className={classes.section}>
      <MoPageHeader
        title={title}
        handleOnClick={handleOnClick}
        isAdmin={isAdmin}
      />
      <MoPageSubtitle
        subtitle={subtitle}
        handleOnClick={handleOnClick}
        isAdmin={isAdmin}
      />
      {children}
    </section>
  );
};

export default compose(withRouter, withStyles(styles))(MoPage);
