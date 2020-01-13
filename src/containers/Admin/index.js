import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../../components/Session';
import { UserList, UserItem } from '../../components/Users';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import PageCard from '../../components/shared/PageCard';

const AdminPage = () => (
  <PageCard title="Admin">
    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS.path} component={UserItem} />
      <Route exact path={ROUTES.ADMIN.path} component={UserList} />
    </Switch>
  </PageCard>
);

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
	withEmailVerification,
  withAuthorization(condition),
)(AdminPage);