const styles = theme => ({
	card: {
		marginBottom: theme.spacing(2),
		padding: theme.spacing(4),
		userSelect: "none",
		borderRadius: 5,
		boxShadow: "0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)",
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
		"	&::before": {
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
	},
	dropZone: {
		color: "#617aa2",
		margin: "20px",
		textAlign: "center",
	}
});

export default styles;
