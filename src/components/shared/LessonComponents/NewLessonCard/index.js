import React from 'react';

import MoLink from 'components/library/MoLink';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const NewLessonCard = ({ classes, url }) => (
  <div className={classes.padding}>
    <MoLink text="Add New Lesson" href={url} />
  </div>
);
export default withStyles(styles)(NewLessonCard);
