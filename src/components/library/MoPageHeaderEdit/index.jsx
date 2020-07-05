import React from 'react';

import Fade from '@material-ui/core/Fade';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

const MoPageHeaderEdit = ({ children, classes, text, register, name }) => {
  return (
    <Fade
      in={(text || children) && true}
      mountOnEnter
      timeout={{ enter: 200 }}
      unmountOnExit>
      <input
        ref={register}
        className={`${classes.text} MuiTypography-h2`}
        placeholder={text || children}
        defaultValue={text || children}
        name={name}
      />
    </Fade>
  );
};

export default withStyles(styles)(MoPageHeaderEdit);
