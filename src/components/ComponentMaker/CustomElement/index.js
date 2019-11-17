import React, { Suspense } from "react";

const Components = {
	button: React.lazy(() => import("@material-ui/core/Button")),
	textField: React.lazy(() => import("@material-ui/core/TextField")),
	input: React.lazy(() => import("@material-ui/core/Input")),
	switch: React.lazy(() => import("@material-ui/core/Switch")),
	checkbox: React.lazy(() => import("@material-ui/core/Checkbox")),
	slider: React.lazy(() => import("@material-ui/core/Slider")),
	link: React.lazy(() => import("@material-ui/core/Link")),
};

const CustomElement = props => {
	const CustomElement = Components[props.content];
	return (
		<Suspense fallback={<div>Loading ...</div>}>
			<CustomElement>{props.content}</CustomElement>
		</Suspense>
	);
};

export default CustomElement;
