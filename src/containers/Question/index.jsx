import React, { lazy } from "react";

import * as ROUTES from "constants/routes";
import { Switch, Route } from "react-router-dom";

const QuestionViewMode = lazy(() =>
	import("containers/Question/QuestionViewMode")
);
const QuestionEditMode = lazy(() =>
	import("containers/Question/QuestionEditMode")
);

const Question = () => (
	<Switch>
		<Route
			exact
			path={ROUTES.COLLECTIONS.path + "/:collection/:questionId"}
			component={QuestionViewMode}
		/>
		<Route
			exact
			path={ROUTES.COLLECTIONS.path + "/:collection/:questionId/isEditMode"}
			component={QuestionEditMode}
		/>
	</Switch>
);

export default Question;
