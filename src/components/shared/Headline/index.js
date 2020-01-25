import React, { useState } from "react";
import Grow from "@material-ui/core/Grow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex"
	}
}));

const Headline = ({ isCorrect }) => {
	const classes = useStyles();
	const [isVisible, setIsVisible] = useState(isCorrect);

	const handleChange = () => {
		setIsVisible(prev => !prev);
	};

	return (
		<div className={classes.container}>
			<Grow
				onChange={handleChange}
				in={isVisible}
				style={{ transformOrigin: "0 0 0" }}
				{...(isVisible ? { timeout: 1000 } : {})}
			>
				<h1>Level 1</h1>
			</Grow>
		</div>
	);
};

export default Headline;
