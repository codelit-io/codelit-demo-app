/**
 * Loops over lsit of courses and renders courses with category title
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Array} courses - List of courses passed to this component from the db
 * @param {Number} points - Number of points the user has for this course
 */

import React from "react";

import { ReactComponent as Js } from "assets/js.svg";
import { ReactComponent as Html } from "assets/html.svg";
import { ReactComponent as ReactJsx } from "assets/react-jsx.svg";
import { ReactComponent as ReactStyle } from "assets/react-style.svg";

import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import LockIcon from "@material-ui/icons/Lock";
import MoCard from "components/library/MoCard";

const types = {
  js: () => <Js />,
  html: () => <Html />,
  reactJsx: () => <ReactJsx />,
  reactStyle: () => <ReactStyle />,
  disabled: () => <LockIcon />
};

const CoursesList = ({ authUser, courses, collectionPath, points }) => {
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
            points={points}
            title={course.title}
            subtitle={course.subtitle}
            url={configureUrl}
            IconComponent={IconComponent}
          />
        </Grid>
      </Grow>
    );
  });
};

export default CoursesList;
