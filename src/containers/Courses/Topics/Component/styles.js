const styles = theme => ({
	iframe: {
		borderRadius: theme.shape.borderRadius,
		border: "none"
	},
	card: {
		borderRadius: theme.shape.borderRadius,
		boxShadow: "0 0 51px 0 rgba(0,0,0,.08), 0 6px 18px 0 rgba(0,0,0,.05)",
		"&:hover": {
			boxShadow: "0 0 114px 0 rgba(0,0,0,.08), 0 30px 25px 0 rgba(0,0,0,.05)"
		},
		backgroundColor: "none",
		marginBottom: "20px"
	},
	audioCard: {
		backgroundColor: "#f2f3f4",
		padding: "10px",
		height: "50px"
	},
	playgroundCard: {
		height: "550px"
	}
});

export default styles;
