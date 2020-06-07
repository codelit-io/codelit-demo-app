/**
 * Loops over lsit of courses and renders courses with category title
 * @prop {Object} authUser - Passed from parent container and has everything about the logged in user
 * @prop {Array} courses - List of courses passed to this component from the db
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @prop {Number} points - Number of points the user has for this course
 */

import React from "react";

import * as ROLES from "constants/roles";
import * as ROUTES from "constants/routes";
import LessonCategory from "components/shared/LessonComponents/LessonCategory";
import LessonCard from "components/shared/LessonComponents/LessonCard";
import NewLessonCard from "components/shared/LessonComponents/NewLessonCard";

const CourseList = ({ authUser, match, courses, points }) => {
  return courses.map((course, index) => {
    /* Configure url route for each item */
    const configureUrl = course.isDisabled ? "" : `courses/${course.doc}`;

    return (
      <React.Fragment key={index}>
        {course.category && (
          <>
            <LessonCategory category={course?.category} index={index} />
            {authUser?.roles[ROLES.ADMIN] && (
              <NewLessonCard url={`${match.url}/${ROUTES.IS_EDIT_MODE.path}`} />
            )}
          </>
        )}
        <LessonCard
          isDisabled={course.isDisabled}
          points={points}
          item={course}
          url={configureUrl}
        />
      </React.Fragment>
    );
  });
};

export default CourseList;
