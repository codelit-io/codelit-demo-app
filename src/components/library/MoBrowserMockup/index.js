/**
 * MoBrowserMockup
 * Browser and Editor mocks are styled to look like a browser to frame the code editor and preview panels
 *
 * @param {String} fileType - html, jsx and so on are valid types. They indicate the file type in the browser mockup
 * @param {Boolean} isEditor - decides whether to use the editor or browser mocks
 * @param {Number} matchPercent - percentage of string matching between user answer and expected answer.
 * @return {<Dialog></Dialog>}
 */

import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Paper from "@material-ui/core/Paper";

const MoBrowserMockup = ({ classes, children, isEditor, title }) => {
  return isEditor ? (
    <Paper className={classes.browserMockup} elevation={3}>
      <span className={classes.title}>{title}</span>
      <div className={classes.editor}>{children}</div>
    </Paper>
  ) : (
    <Paper className={classes.browserMockup} elevation={3}>
      <span className={classes.title}>Preview</span>
      <div id="MoBrowserMockup" className={classes.preview}>
        {children}
      </div>
    </Paper>
  );
};

export default withStyles(styles)(MoBrowserMockup);
