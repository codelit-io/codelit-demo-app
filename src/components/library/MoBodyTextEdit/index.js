import React from 'react';

import Fade from '@material-ui/core/Fade';

const MoBodyTextEdit = ({ subtitle, children }) => (
  <Fade
    timeout={{ enter: 800 }}
    mountOnEnter
    in={(subtitle || children) && true}
    unmountOnExit>
    <input
      styles={{ paddingLeft: '4px', color: '#484848' }}
      className="MuiTypography-subtitle1"
      placeholder={subtitle || children}
    />
  </Fade>
);

export default MoBodyTextEdit;
