import React from "react";

import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoBrowserMockup = ({
  classes,
  children,
  fileType,
  isEditor,
  isBrowser
}) => (
  <>
    {isEditor && (
      <div className={classes.browserMockup}>
        <div className={classes.browserButtons}></div>
        <div className={classes.browserFilename}>
          <span>{`index.${fileType}`}</span>
        </div>
        <div className={classes.editor}>{children}</div>
      </div>
    )}
    {isBrowser && (
      <div className={classes.browserMockup}>
        <div className={classes.browserButtons}></div>
        <div className={classes.browserButtons2}>
          <span>localhost:3000</span>
        </div>
        <div className={classes.preview}>{children}</div>
      </div>
    )}
  </>
);

export default withStyles(styles)(MoBrowserMockup);
