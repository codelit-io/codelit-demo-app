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
import { BROWSER_MOCKUP } from "constants/i18n";
import MoTypography from "../MoTypography";
const MoBrowserMockup = ({ classes, children, isEditor }) => {
  return isEditor ? (
    <Paper className={classes.browserMockup} elevation={3}>
      <MoTypography variant="caption">
        {BROWSER_MOCKUP.CODE_EDITOR}
      </MoTypography>
      <div className={classes.editor}>{children}</div>
    </Paper>
  ) : (
    <Paper className={classes.browserMockup} elevation={3}>
      <MoTypography variant="caption">
        {BROWSER_MOCKUP.CODE_PREVIEW}
      </MoTypography>
      <div id="MoBrowserMockup" className={classes.preview}>
        {children}
      </div>
    </Paper>
  );
};

export default withStyles(styles)(MoBrowserMockup);
