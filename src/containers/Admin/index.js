import React, { Suspense, lazy } from "react";

import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import AdminNav from "./AdminNav";
import { compose } from "recompose";
import { Switch, Route } from "react-router-dom";
import MoPage from "../../components/shared/MoPage";
import MoSpinner from "../../components/shared/MoSpinner";
import { UserList, UserItem } from "../../components/Users";
import {
  withAuthorization,
  withEmailVerification
} from "../../components/Session";

const Collection = lazy(() => import("./Collection"));

const AdminPage = ({ history }) => (
  <MoPage title="Admin" isLoading={false}>
    <AdminNav history={history} />
    <Suspense
      fallback={<MoSpinner isLoading={true} color="primary" />}
    ></Suspense>
    <Switch>
      <Route
        exact
        path={ROUTES.ADMIN_COLLECTIONS.path + "/:collection"}
        component={Collection}
      />
      <Route exact path={ROUTES.ADMIN_DETAILS.path} component={UserList} />
      <Route exact path={ROUTES.ADMIN_USERS.path} component={UserList} />
      <Route
        exact
        path={ROUTES.ADMIN_USERS.path + "/:id"}
        component={UserItem}
      />
    </Switch>
  </MoPage>
);

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(AdminPage);
