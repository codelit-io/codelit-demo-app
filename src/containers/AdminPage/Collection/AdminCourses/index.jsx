import React from "react";
import useCollections from "hooks/useCollections";
import { withAuthentication } from "components/shared/Session";
import { Grid } from "@material-ui/core";

import CoursesList from "containers/Courses/CoursesPage/CoursesList";

const AdminCourses = ({ firebase }) => {
  const courses = useCollections({ collectionPath: "courses" }, firebase);

  return (
    <Grid container spacing={4} alignItems="center">
      <CoursesList courses={courses.data} collectionPath={"admin/courses"} />
    </Grid>
  );
};
export default withAuthentication(AdminCourses);
