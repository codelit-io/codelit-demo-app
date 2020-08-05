/* TODO: Ignore this component and add comments */

import React from "react";

import { withEmailVerification } from "components/shared/Session";

import Messages from "components/shared/Messages";

const FeatureRequest = () => <Messages />;

export default withEmailVerification(FeatureRequest);
