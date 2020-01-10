import React from "react";
import { compose } from "recompose";

import {
	withAuthorization,
	withEmailVerification
} from "../../components/Session";
import Messages from "../../components/Messages";

const HomePage = () => (
	<div>
		<h1>Welcome to Mo Skool</h1>
		<Messages />
	</div>
);

const condition = authUser => !!authUser;

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(HomePage);
