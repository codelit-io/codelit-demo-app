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
import { retry } from "helpers/retryLazyImports";

const Courses = lazy(() =>
  retry(() => import("containers/Collections/Courses"))
);

const Questions = lazy(() =>
  retry(() => import("containers/Collections/Questions"))
);

const Question = lazy(() =>
  retry(() => import("containers/Collections/Question"))
);

const Collections = () => (
  <Switch>
    {/*  @see Link [Example Courses Page](https://moskool.com/courses) */}
    <Route exact path={ROUTES.COLLECTIONS.path} component={Courses} />
    {/*  @see Link [Example Questions Page](https://moskool.com/courses/new-to-html) */}
    <Route
      exact
      path={ROUTES.COLLECTIONS.path + "/:collection"}
      component={Questions}
    />
    {/*  @see Link [Example Questions Page](https://moskool.com/courses/new-to-html/1) */}
    <Route
      path={ROUTES.COLLECTIONS.path + "/:collection/:questionId"}
      component={Question}
    />
  </Switch>
);

export default Collections;
