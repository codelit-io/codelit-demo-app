import React from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex"
	}
}));

const Headline = ( ) => {
	const classes = useStyles();
	const [checked, setChecked] = React.useState(false);

	const handleChange = () => {
		setChecked(prev => !prev);
	};

	return (
		<div className={classes.container}>
			<Grow in={checked} style={{ transitionDelay: checked ? "1200ms" : "0ms" }}>
				<h1>Level 1</h1>
			</Grow>
		</div>
	);
};

export default Headline;
