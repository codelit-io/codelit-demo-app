import React from 'react';

import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

const MoTitle = ({ text, fade, margin, textAlign, width }) => {
  const styles = {
    text: {
      color: '#383c40',
      verticalAlign: 'middle',
      textDecoration: 'none',
      textAlign: textAlign || '',
      margin: margin || '',
    },
    container: {
      width: width || '',
    },
  };

  return (
    <Fade in={text && true} mountOnEnter timeout={{ enter: 200 }} unmountOnExit>
      <Typography variant="h4" style={styles.container}>
        <Box fontWeight="fontWeightLight" style={styles.text}>
          {text}
        </Box>
      </Typography>
    </Fade>
  );
};

export default MoTitle;
