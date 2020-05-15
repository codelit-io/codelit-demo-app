import React from "react";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const MoPageHeader = ({ classes, isAdmin, title, children, handleOnClick }) => {
  return (
    <Fade in={(title || children) && true} timeout={{ enter: 800 }}>
      <Typography variant="h2" onClick={() => handleOnClick()}>
        <Box
          fontWeight="fontWeightLight"
          className={`${classes.title} ${isAdmin && classes.titleHover}`}
        >
          {title} {children}
        </Box>
      </Typography>
    </Fade>
  );
};

export default withStyles(styles)(MoPageHeader);