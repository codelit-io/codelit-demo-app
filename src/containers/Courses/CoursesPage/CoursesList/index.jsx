/**
 * Loops over lsit of courses and renders courses with category title
 * @param {Object} userRole - Passed from parent container and has the logged in user's role
 * @param {Array} courses - List of courses passed to this component from the db
 * @param {Number} points - Number of points the user has for this course
 */

import React from "react";

import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import MoCard from "components/library/MoCard";

const CoursesList = ({ courses, collectionPath, points, types }) => {
  return courses.map((course, index) => {
    /* Configure url route for each item */
    const configureUrl = course.isDisabled
      ? ""
      : `/${collectionPath}/${course.doc}`;

    const IconComponent = course.isDisabled
      ? types.disabled
      : types[course.type];

    return (
      <Grow in={course && true} key={index}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <MoCard
            isDisabled={course.isDisabled}
            type={course.type}
            points={points}
            title={course.title}
            subtitle={course.subtitle}
            url={course.url || configureUrl}
            IconComponent={IconComponent}
          />
        </Grid>
      </Grow>
    );
  });
};

export default CoursesList;
