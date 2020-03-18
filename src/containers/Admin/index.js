import React, { Suspense, lazy } from "react";

import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import AdminNav from "./AdminNav";
import { compose } from "recompose";
import { Switch, Route } from "react-router-dom";
import MoPage from "../../components/shared/MoPage";
import Spinner from "../../components/shared/Spinner";
import { UserList, UserItem } from "../../components/Users";
import {
  withAuthorization,
  withEmailVerification
} from "../../components/Session";

const Questions = lazy(() => import("./Questions"));

const AdminPage = ({ history }) => (
  <MoPage title="Admin" isCard={true} loading={false}>
    <AdminNav history={history} />
    <Suspense fallback={<Spinner loading={true} color="primary" />}></Suspense>
    <Switch>
      <Route
        exact
        path={ROUTES.ADMIN_QUESTIONS.path + "/:level"}
        component={Questions}
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
