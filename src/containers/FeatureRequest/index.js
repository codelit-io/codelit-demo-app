/* TODO: Ignore this component and add comments */

import React from 'react';
import { compose } from 'recompose';

import {
  withAuthorization,
  withEmailVerification,
  withAuthentication,
} from 'components/shared/Session';
import Messages from 'components/shared/Messages';

const FeatureRequest = () => <Messages />;

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthentication,
  withAuthorization(condition),
)(FeatureRequest);
