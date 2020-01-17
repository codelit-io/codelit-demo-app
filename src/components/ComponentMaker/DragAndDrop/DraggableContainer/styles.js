const styles = theme => ({
	card: {
		marginBottom: theme.spacing(2),
		padding: theme.spacing(4),
		userSelect: "none",
		borderRadius: 5,
		boxShadow: "0 0 114px 0 rgba(0,0,0,.08), 0 30px 25px 0 rgba(0,0,0,.05)",
		// change background colour if dragging
		background: "white"
	},
	correct: {
		boxShadow:
			"0 0 114px 0 rgba(0,0,0,.08), 0 30px 25px 0 rgba(196, 245, 46, 0.49)"
	},
	wavyErrorBorder: {
		display: "inline-block",
		position: "relative",
		"&::before": {
			content: "~~~~~~~~~~~~",
			fontSize: "0.6em",
			fontWeight: 700,
			fontFamily: "Times New Roman, Serif",
			color: "red",
			width: "100%",
			position: "absolute",
			top: "12px",
			left: "-1px",
			overflow: "hidden"
		}
	}
});

export default styles;
