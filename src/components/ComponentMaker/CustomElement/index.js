import React from "react";
import { Button, TextField, Input, Switch, Checkbox, Slider, Link } from "@material-ui/core";

const Components = {
	button: Button,
	textField: TextField,
	input: Input,
	switch: Switch,
	checkbox: Checkbox,
	slider: Slider,
	link: Link,

};

const CustomElement = props => {
	const CustomElement = Components[props.content];
	return <CustomElement>{props.content}</CustomElement>;
};

export default CustomElement;
