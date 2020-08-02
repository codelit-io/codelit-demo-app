/* TODO: Ignore this component and add comments */

import React from "react";
import { compose } from "recompose";

import {
  withAuthorization,
  withEmailVerification,
  withAuthentication
} from "components/shared/Session";
import Messages from "components/shared/Messages";

const FeatureRequest = () => <Messages />;

const condition = authUser => !!authUser;

const isUserRole = false;

export default compose(
  withEmailVerification,
  withAuthentication(isUserRole)
  // withAuthorization(condition)
)(FeatureRequest);
