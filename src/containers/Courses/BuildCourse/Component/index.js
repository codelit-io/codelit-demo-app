import React, { Suspense, useState } from "react";
import Spinner from "../../../../components/shared/Spinner";

export const Component = props => {
    const Component = React.lazy(() => import(`../../../../library/components/${props.topic}`))
	const [state, setState] = useState({status: ""});
    return (
		<Suspense fallback={<Spinner loading={true} color="primary" />}>
			<Component onClick={() => setState({status: "Saved!"})} {...props}></Component>
			<p>{state.status}</p>
		</Suspense>
	);
};
