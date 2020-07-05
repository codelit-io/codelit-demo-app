import React from 'react';

import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';

const MoBodyText = ({ subtitle, children }) => {
  const useStyles = makeStyles(theme =>
    createStyles({
      text: {
        paddingLeft: theme.space.sm,
        color: theme.grey.light,
      },
    }),
  );

  const classes = useStyles();
  return (
    <Fade
      timeout={{ enter: 800 }}
      mountOnEnter
      in={(subtitle || children) && true}
      unmountOnExit>
      <Typography variant="body1" className={classes.text}>
        {subtitle}
        {children}
      </Typography>
    </Fade>
  );
};

export default MoBodyText;
