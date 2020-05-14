import React from "react";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "components/shared/Session";
import Messages from "components/shared/Messages";

const HomePage = () => <Messages />;

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(HomePage);
