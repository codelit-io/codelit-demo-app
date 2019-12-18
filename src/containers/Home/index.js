import React from "react";

import { withAuthorization } from "../../components/Session";

const HomePage = () => (
	<div>
		<h1>HomePage</h1>
		<p>Welcome to Home Page</p>
	</div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
