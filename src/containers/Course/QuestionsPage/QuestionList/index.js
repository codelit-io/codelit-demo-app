/**
 * Loops over lsit of questions and renders list of questions with category title
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Array} questions - List of questions passed to this component from the db
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Number} points - Number of points the user has for this course
 */

import React from "react";

import * as ROLES from "constants/roles";
import * as ROUTES from "constants/routes";
import LessonCategory from "components/shared/LessonComponents/LessonCategory";
import LessonCard from "components/shared/LessonComponents/LessonCard";
import NewLessonCard from "components/shared/LessonComponents/NewLessonCard";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

const QuestionList = ({ authUser, match, questions, points }) => {
  return questions.map((question, index) => {
    /* Figure out route name based on collection*/
    const doc = match.params.collection;

    /* isDisabled is configured based on points and question's id */
    let isDisabled = doc
      ? points
        ? points < Number(question.id) - 1 && Number(question.id) !== 1
        : Number(question.id) !== 1
      : false;

    /* Configure url route for each item */
    const configureUrl = isDisabled ? "" : `${doc}/${question.id}`;

    return (
      <React.Fragment key={index}>
        {question.category && (
          <>
            <LessonCategory category={question?.category} index={index} />
            {authUser && authUser.roles && authUser.roles[ROLES.ADMIN] && (
              <NewLessonCard url={`${match.url}/${ROUTES.IS_EDIT_MODE.path}`} />
            )}
          </>
        )}
        <LessonCard
          isDisabled={isDisabled}
          points={points}
          item={question}
          IconComponent={SportsEsportsIcon}
          index={index + 1}
          url={configureUrl}
        />
      </React.Fragment>
    );
  });
};

export default QuestionList;
