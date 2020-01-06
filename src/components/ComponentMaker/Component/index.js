import React, { Suspense } from "react";
import Components from "../Components"
import Spinner from "../../shared/Spinner";

const Component = props => {
	const Component = Components[props.content];
	return (
		<Suspense fallback={<Spinner loading={true} color="primary" />}>
			<Component>{props.content}</Component>
		</Suspense>
	);
};

export default Component;
