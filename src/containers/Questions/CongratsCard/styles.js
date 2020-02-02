const styles = theme => ({
	container: {
		position: "fixed",
		bottom: "0px",
		width: "95%",
		textAlign: "center",
		zIndex: "-1"
	},
	card: {
		boxShadow:
			"0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)",
		"&:hover": {
			transform: "translateY(-5px)",
			backgroundColor: "#FFF"
		},
		"&:hover .desc": {
			color: "#1890ff"
		},
		transition:
			"transform .35s cubic-bezier(.4,0,.2,1),box-shadow .35s cubic-bezier(.4,0,.2,1)",
		transform: "translateY(0)"
	},
	img: {
		width: "40%",
		maxWidth:"40%",
		[theme.breakpoints.down(500)]: {
			width: "65%"
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
		radius: "3px"
	}
});

export default styles;
