import React, { Suspense } from "react";

export const Component = props => {
    const Component = React.lazy(() => import(`../../../../library/components/${props.type}`))

    return (
		<Suspense fallback={<div>Loading...</div>}>
			<Component {...props}></Component>
		</Suspense>
	);
};
