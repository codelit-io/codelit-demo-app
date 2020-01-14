import React, { Suspense } from "react";
import Components from "../Components"
import Spinner from "../../shared/Spinner";

const MoComponent = props => {
	const Component = Components[props.element];
	return (
		<Suspense fallback={<Spinner loading={true} color="primary" />}>
			<Component>{props.element}</Component>
		</Suspense>
	);
};

export default MoComponent;
