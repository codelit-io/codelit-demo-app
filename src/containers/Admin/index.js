import React from "react";

import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import AdminNav from "./AdminNav";
import { compose } from "recompose";
import { Switch, Route } from "react-router-dom";
import PageCard from "../../components/shared/PageCard";
import { UserList, UserItem } from "../../components/Users";
import {
	withAuthorization,
	withEmailVerification
} from "../../components/Session";

const AdminPage = ({ history }) => (
	<PageCard title="Admin">
    <AdminNav history={history} />
		<Switch>
			<Route exact path={ROUTES.ADMIN_DETAILS.path} component={UserItem} />
			<Route exact path={ROUTES.ADMIN.path} component={UserList} />
			<Route exact path={ROUTES.ADMIN_ADD_QUESTION.path} component={UserList} />
		</Switch>
	</PageCard>
);

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(AdminPage);
