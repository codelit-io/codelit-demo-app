const styles = theme => ({
	container: {
		textAlign: "center",
	},
	img: {
		position:"fixed",
    	zIndex: "-3",
		bottom: "0",
		maxWidth: "48%",
		[theme.breakpoints.down(500)]: {
			display: "none"
		}
	},
	button: {
		marginBottom: theme.spacing(6),
		color: "#252828",
		border: "0",
		height: "48px",
		fontSize: "16px",
		padding: "0 30px",
		background: "linear-gradient(45deg, #dbf2a1 30%, #04baab 90%)",
		radius: "3px",
	}
});

export default styles;
