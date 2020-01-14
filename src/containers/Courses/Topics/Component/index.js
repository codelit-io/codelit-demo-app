import React, { Suspense, useState } from "react";

import Dnd from "../../../../components/Dnd";
import Spinner from "../../../../components/shared/Spinner";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const Component = ({ topics, classes }) => {
	const [state] = useState({ status: "" });
	return (
		<Suspense fallback={<Spinner loading={true} color="primary" />}>
			<Dnd></Dnd>
			<p>{state.status}</p>
		</Suspense>
	);
};

export default withStyles(styles)(Component);