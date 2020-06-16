/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Question routing component 🚕
 *
 * This component is responsible for routing between question view
 * the first route is a view only mode, where users can answer the question
 * the second route is edit mode, where users can edit and save question details - only authors and admins can do this
 *
 * @returns - routes to components
 *
 * */

import React, { lazy } from "react";

import * as ROUTES from "constants/routes";
import { Switch, Route } from "react-router-dom";
import { retry } from "utils/retryLazyImports";

const QuestionView = lazy(() =>
	retry(() => import("containers/Question/QuestionView"))
);
const QuestionEdit = lazy(() =>
	retry(() => import("containers/Question/QuestionEdit"))
);
const Question = () => (
	<Switch>
		<Route
			exact
			path={ROUTES.COLLECTIONS.path + "/:collection/:questionId"}
			component={QuestionView}
		/>
		<Route
			exact
			path={ROUTES.COLLECTIONS.path + "/:collection/:questionId/isEditMode"}
			component={QuestionEdit}
		/>
	</Switch>
);

export default Question;
