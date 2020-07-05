import React from 'react';
import CourseList from 'containers/Courses/CourseCollection/CoursePage/CourseList';
import useCollections from 'hooks/useCollections';
import { withAuthentication } from 'components/shared/Session';
import { Grid } from '@material-ui/core';

const AdminCourses = ({ firebase }) => {
  const courses = useCollections({ collectionPath: 'courses' }, firebase);

  return (
    <Grid container spacing={4} alignItems="center">
      <CourseList courses={courses.data} collectionPath={'courses'} />
    </Grid>
  );
};
export default withAuthentication(AdminCourses);
