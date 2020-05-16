import React from "react";

import MoLinearProgress from "components/library/MoLinearProgress";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoBrowserMockup = ({
  classes,
  children,
  fileType,
  isEditor,
  isBrowser,
  matchPercent,
}) => (
  <>
    {isEditor && (
      <div className={classes.browserMockup}>
        <div className={classes.browserButtons}></div>
        <div className={classes.browserFilename}>
          <span className={classes.font}>{`index.${fileType}`}</span>
        </div>
        <div className={classes.editor}>{children}</div>
        {matchPercent && <MoLinearProgress percent={matchPercent} />}
      </div>
    )}
    {isBrowser && (
      <div className={classes.browserMockup}>
        <div className={classes.browserButtons}></div>
        <div className={classes.browserButtons2}>
          <span className={classes.font}>localhost:3000</span>
        </div>
        <div className={classes.preview}>{children}</div>
      </div>
    )}
  </>
);

export default withStyles(styles)(MoBrowserMockup);
