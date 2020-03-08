import React from "react";

const style = {
	textarea: {
		boxSizing: "border-box",
		border: "none",
		borderRadius: "3px",
		lineHeight: "24px",
		overflow: "auto",
		height: "auto",
		padding: "8px",
		boxShadow: "0px 4px 10px -8px black"
	}
};
const MoTextarea = props => {
	return (
		<textarea
			aria-label={props.value}
			placeholder=""
			value={props.value}
			onChange={e => props.onChange(e.target.value)}
			style={style.textarea}
		/>
	);
};

export default MoTextarea;
