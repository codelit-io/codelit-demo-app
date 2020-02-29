const styles = theme => ({
	button: {
		padding: theme.spacing(2),
		color: "black",
		fontSize: "20px",
		boxShadow: "0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)",
		backgroundColor: "#daff81",
		borderRadius: "3px",
		"&:hover": {
			backgroundColor: "#daff81",
		}
	}
});

export default styles;