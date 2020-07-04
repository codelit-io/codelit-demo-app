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

const MoBrowserMockup = ({ classes, children, fileType, isEditor }) => {
  return isEditor ? (
    <div className={classes.browserMockup}>
      <div className={classes.browserFilename}>
        <span className={classes.font}>{fileType}</span>
      </div>
      <div className={classes.editor}>{children}</div>
    </div>
  ) : (
    <div className={classes.browserMockup}>
      <div className={classes.browserButtons} />
      <div className={classes.browserHeader}>
        <span className={classes.font}>localhost:3000</span>
      </div>
      <div id="MoBrowserMockup" className={classes.preview}>
        {children}
      </div>
    </div>
  );
};

export default withStyles(styles)(MoBrowserMockup);
