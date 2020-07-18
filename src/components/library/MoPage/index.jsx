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
import styles from "./styles";
import MoSpinner from "../MoSpinner";
import MoTypography from "../MoTypography";
import { Fade } from "@material-ui/core";

const MoPage = ({ classes, children, isLoading, subtitle, title }) => {
  if (isLoading) {
    return <MoSpinner isLoading={isLoading} />;
  }
  return (
    <Fade
      in={!isLoading}
      mountOnEnter
      timeout={{ enter: 200, exit: 200 }}
      unmountOnExit
    >
      <section className={classes.section}>
        <MoTypography
          font="breeSerif"
          marginBottom="md"
          text={title}
          variant="h2"
        ></MoTypography>
        <MoTypography
          font="openSans"
          marginBottom="md"
          text={subtitle}
          variant="h6"
        ></MoTypography>
        {children}
      </section>
    </Fade>
  );
};

export default withStyles(styles)(MoPage);
