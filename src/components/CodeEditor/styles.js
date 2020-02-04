const styles = theme => ({
	editor: {
		transition: "all 500ms",
		font:
			"16px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace",
		[theme.breakpoints.up(600)]: {
			width: "380",
			marginLeft: "auto",
			marginRight: "auto"
		},
		"& textarea": {
			fontSize: "14px",
			outline: "none"
		}
	},
	preview: {
		width: "300px",
		margin: "0 auto",
		display: "flex",
		justifyContent: "center",
		borderRadius: "8px",
		[theme.breakpoints.up(600)]: {
			width: "300px",
		}
	},
	card: {
		background: "white",
		borderRadius: "8px",
		boxShadow:
			"0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)",
		padding: "1.2em"
	},
	error: {
		background: "rgb(255, 85, 85)",
		color: "rgb(248, 248, 242)",
		padding: "10px",
		borderRadius: "8px",
		boxShadow:
			"0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)"
	},
	correct: {
		boxShadow:
			"0 0 114px 0 rgba(0,0,0,.08), 0 30px 25px 0 rgba(196, 245, 46, 0.49)"
	}
});

export default styles;
