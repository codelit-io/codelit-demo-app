/* TODO: Ignore this component and add comments */

import React from "react";
import { compose } from "recompose";

import {
  withEmailVerification,
  withAuthentication
} from "components/shared/Session";
import Messages from "components/shared/Messages";

const FeatureRequest = () => <Messages />;

export default compose(
  withEmailVerification,
  withAuthentication(false)
)(FeatureRequest);
