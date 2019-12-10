import React, { Suspense } from "react";
import Components from "../Components"


const Component = props => {
	const Component = Components[props.content];
	return (
		<Suspense fallback={<div>Loading ...</div>}>
			<Component>{props.content}</Component>
		</Suspense>
	);
};

export default Component;
