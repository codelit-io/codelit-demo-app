/**
 *
 * @author Mo Skool
 * @version 1.0.0
 * @visibleName Courses routing component 🚕
 *
 * This component is responsible for routing between questions view and edit pages
 * the first route is a view only mode, where users can view question cards
 * the second route is edit mode, where users can edit and save Courses' details - only authors and admins can do this
 *
 * @returns - routes to components
 *
 * @see Link [Example Courses View Page](https://moskool.com/courses)
 *
 * */

import React, { lazy } from "react";

import * as ROUTES from "constants/routes";
import { Switch, Route } from "react-router-dom";
import { retry } from "helpers/retryLazyImports";

const CoursesViewPage = lazy(() =>
  retry(() => import("containers/Collections/Courses/CoursesViewPage"))
);
const CoursesEditPage = lazy(() =>
  retry(() => import("containers/Collections/Courses/CoursesEditPage"))
);
const Questions = lazy(() =>
  retry(() => import("containers/Collections/Questions"))
);

const Question = lazy(() =>
  retry(() => import("containers/Collections/Question"))
);

const Courses = () => (
  <Switch>
    <Route exact path={ROUTES.COLLECTIONS.path} component={CoursesViewPage} />
    <Route
      exact
      path={ROUTES.COLLECTIONS.path + "/isEditMode"}
      component={CoursesEditPage}
    />
    <Route
      exact
      path={ROUTES.COLLECTIONS.path + "/:collection"}
      component={Questions}
    />
    <Route
      path={ROUTES.COLLECTIONS.path + "/:collection/:questionId"}
      component={Question}
    />
  </Switch>
);

export default Courses;
