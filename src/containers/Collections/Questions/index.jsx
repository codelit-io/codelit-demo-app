/**
 *
 * @author Mo Skool
 * @version 1.0.0
 * @visibleName Questions routing component 🚕
 *
 * This component is responsible for routing between questions view and edit pages
 * the first route is a view only mode, where users can view question cards
 * the second route is edit mode, where users can edit and save questions' details - only authors and admins can do this
 *
 * @returns - routes to components
 *
 * @see Link [Example Questions Page](https://moskool.com/courses/mo-easy)
 *
 * */

import React, { lazy } from "react";

import * as ROUTES from "constants/routes";
import { Switch, Route } from "react-router-dom";
import { retry } from "helpers/retryLazyImports";

const QuestionsViewPage = lazy(() =>
  retry(() => import("containers/Collections/Questions/QuestionsViewPage"))
);
const QuestionsEditPage = lazy(() =>
  retry(() => import("containers/Collections/Questions/QuestionsEditPage"))
);
const Questions = () => (
  <Switch>
    <Route
      exact
      path={ROUTES.COLLECTIONS.path + "/:collection"}
      component={QuestionsViewPage}
    />
    <Route
      exact
      path={ROUTES.COLLECTIONS.path + "/:collection/isEditMode"}
      component={QuestionsEditPage}
    />
  </Switch>
);

export default Questions;
