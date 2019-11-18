import React from "react";

const Components = {
	button: React.lazy(() => import("@material-ui/core/Button")),
	textField: React.lazy(() => import("@material-ui/core/TextField")),
	input: React.lazy(() => import("@material-ui/core/Input")),
	switch: React.lazy(() => import("@material-ui/core/Switch")),
	checkbox: React.lazy(() => import("@material-ui/core/Checkbox")),
	slider: React.lazy(() => import("@material-ui/core/Slider")),
	link: React.lazy(() => import("@material-ui/core/Link")),
};

export default Components;