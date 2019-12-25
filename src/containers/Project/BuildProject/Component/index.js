import React, { Suspense, useState } from "react";

export const Component = props => {
    const Component = React.lazy(() => import(`../../../../library/components/${props.type}`))
	const [state, setState] = useState({status: ""});
    return (
		<Suspense fallback={<div>Loading...</div>}>
			<Component onClick={() => setState({status: "Saved!"})} {...props}></Component>
			<p>{state.status}</p>
		</Suspense>
	);
};
