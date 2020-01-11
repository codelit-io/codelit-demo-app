import React from "react";
import { compose } from "recompose";

import {
	withAuthorization,
	withEmailVerification
} from "../../components/Session";
import Messages from "../../components/Messages";
import PageCard from "../../components/shared/PageCard";

const HomePage = () => (
	<PageCard title="Welcome to Mo Skool">
		<Messages />
	</PageCard>
);

const condition = authUser => !!authUser;

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(HomePage);
