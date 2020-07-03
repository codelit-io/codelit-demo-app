/**
 * MoPage
 * Default page used through out the app, used to wrap elements with page like styles
 * provides a heading title and a subtitle for the page with loading spinner
 * @param {Boolean} isAdmin - based on user role
 * @param {Boolean} isLoading - loading or not
 * @param {String} title - Title for the page
 * @param {String} subtitle - Subtitle for the page
 */

import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import MoHint from "components/library/MoHint";
import styles from "./styles";
import MoPageHeader from "../MoPageHeader";
import MoSpinner from "../MoSpinner";
import MoPageContent from "../MoPageContent";

const MoPage = ({
  classes,
  children,
  hint,
  isLoading,
  isAdmin,
  subtitle,
  title
}) => {
  if (isLoading) {
    return <MoSpinner isLoading={isLoading} />;
  }
  return (
    <section className={classes.section}>
      <MoPageHeader text={title} isAdmin={isAdmin} />
      <MoPageContent text={subtitle} />
      <MoHint text={hint} />
      {children}
    </section>
  );
};

export default withStyles(styles)(MoPage);
