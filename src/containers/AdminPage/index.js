import React, { Suspense, lazy } from "react";

import * as ROLES from "constants/roles";
import * as ROUTES from "constants/routes";
import { compose } from "recompose";
import { Switch, Route } from "react-router-dom";
import MoPage from "components/library/MoPage";
import MoSpinner from "components/library/MoSpinner";
import { UserList } from "components/shared/Users";
import { UserItem } from "components/shared/Users";
import useCollections from "hooks/useCollections";
import {
  withAuthorization,
  withEmailVerification,
} from "components/shared/Session";

const AdminNav = lazy(() => import("./AdminNav"));
const Collection = lazy(() => import("./Collection"));

const AdminPage = ({ firebase, history }) => {
  const courses = useCollections("courses", firebase);
  return (
    <MoPage title="Admin" isLoading={false}>
      <AdminNav courses={courses} history={history} />
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
};

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(AdminPage);
