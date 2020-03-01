const styles = theme => ({
	container: {
		alignItems: "center",
		marginBottom: theme.spacing(6)
	},
	heroText: {
		color: "rgb(43, 43, 43)",
		fontSize: "40px",
		fontWeight: "500",
		lineHeight: "1.2",
		letterSpacing: "-0.01em",
		marginBottom: "30px"
	},
	heroSubtitle: {
		color: "rgb(94, 94, 94)",
		fontSize: "24px",
		lineHeight: "1.5",
		letterSpacing: "-0.01em",
		marginBottom: "30px"
	},
	img: {
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	centeredContainer: {
		textAlign: "center"
	},
	checkMark: {
		color: "#41D3BD"
	}
});

export default styles;
