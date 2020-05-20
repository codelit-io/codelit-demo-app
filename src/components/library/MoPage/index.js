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

export default withStyles(styles)(MoPage);
