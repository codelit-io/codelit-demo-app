/**
 * MoPage
 * Default page used through out the app, used to wrap elements with page like styles
 * provides a heading title and a subtitle for the page with loading spinner
 * @param {Boolean} isAdmin - based on user role
 * @param {Boolean} isLoading - loading or not
 * @param {String} title - Title for the page
 * @param {String} subtitle - Subtitle for the page
 * @return {<Dialog></Dialog>}
 */

import React from "react";

import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import MoPageHeader from "../MoPageHeader";
import MoSpinner from "../MoSpinner";
import MoPageSubtitle from "../MoPageSubtitle";
import MoHint from "components/library/MoHint";

const MoPage = ({
  classes,
  children,
  hint,
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
      <MoPageHeader title={title} isAdmin={isAdmin} />
      <MoPageSubtitle subtitle={subtitle} isAdmin={isAdmin} />
      <MoHint text={hint} />
      {children}
    </section>
  );
};

export default withStyles(styles)(MoPage);
