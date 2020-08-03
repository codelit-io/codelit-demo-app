/**
 *
 * @author Mo Skool
 * @version 1.0.0
 * @visibleName Collections routing component 🚕
 *
 * Handles high level routing between containers Courses, Questions and Question
 * Then each container will handle child routes and split into edit and view modes
 *
 * @returns - routes to components
 *
 * @see Link [Example Courses View Page](https://moskool.com/courses)
 *
 * */

import React, { lazy } from "react";

import * as ROUTES from "constants/routes";
import { Switch, Route } from "react-router-dom";

// Courses Routes
const CoursesViewPage = lazy(() =>
  import("containers/Collections/Courses/CoursesViewPage")
);

const CoursesEditPage = lazy(() =>
  import("containers/Collections/Courses/CoursesEditPage")
);

// Questions Routes
const QuestionsViewPage = lazy(() =>
  import("containers/Collections/Questions/QuestionsViewPage")
);

const QuestionsEditPage = lazy(() =>
  import("containers/Collections/Questions/QuestionsEditPage")
);

// Question Routes
const QuestionViewPage = lazy(() =>
  import("containers/Collections/Question/QuestionViewPage")
);

const QuestionEditPage = lazy(() =>
  import("containers/Collections/Question/QuestionEditPage")
);

const Collections = () => (
  <Switch>
    {/*  @see Link [Example Courses Page](https://moskool.com/courses) */}
    <Route component={CoursesViewPage} exact path={ROUTES.COLLECTIONS.path} />
    <Route component={CoursesViewPage} exact path={ROUTES.COMPANIES.path} />

    {/*  @see Link [Example Courses Page](https://moskool.com/courses/isEditMode) */}
    <Route
      component={CoursesEditPage}
      exact
      path={ROUTES.COLLECTIONS.path + "/isEditMode"}
    />

    {/*  @see Link [Example Questions Page](https://moskool.com/courses/new-to-html) */}
    <Route
      component={QuestionsViewPage}
      exact
      path={ROUTES.COLLECTIONS.path + "/:collection"}
    />

    {/*  @see Link [Example Questions Page](https://moskool.com/courses/new-to-html/isEditMode) */}
    <Route
      component={QuestionsEditPage}
      exact
      path={ROUTES.COLLECTIONS.path + "/:collection/isEditMode"}
    />

    {/*  @see Link [Example Questions Page](https://moskool.com/courses/new-to-html/1) */}
    <Route
      component={QuestionViewPage}
      exact
      path={ROUTES.COLLECTIONS.path + "/:collection/:questionId"}
    />

    {/*  @see Link [Example Questions Page](https://moskool.com/courses/new-to-html/1/isEditMode) */}
    <Route
      component={QuestionEditPage}
      exact
      path={ROUTES.COLLECTIONS.path + "/:collection/:questionId/isEditMode"}
    />
  </Switch>
);

export default Collections;
