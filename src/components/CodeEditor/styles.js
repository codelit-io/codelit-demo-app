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
		padding: "20px",
		margin: "0 auto",
		display: "flex",
		justifyContent: "center",
		borderRadius: "8px",
		[theme.breakpoints.up(600)]: {
			width: "300px"
		}
	},
	card: {
		minHeight: "60px",
		background: "white",
		borderRadius: "8px",
		padding: "1.2em",
		boxShadow:
			"0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)"
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
	},
	browserMockup: {
		minHeight: "60px",
		borderTop: "2em solid rgba(230, 230, 230, 0.7)",
		position: "relative",
		borderRadius: "3px 3px 0 0",
		boxShadow:
			"0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)"
	},
	browserButtons: {
		display: "block",
		position: "absolute",
		content: "",
		top: "-1.25em",
		left: "1em",
		width: "0.5em",
		height: "0.5em",
		borderRadius: "50%",
		backgroundColor: "#f44",
		boxShadow: "0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5"
	},
	browserButtons2: {
		display: "block",
		position: "absolute",
		content: "",
		top: "-1.6em",
		left: "5.5em",
		width: "calc(100% - 6em)",
		height: "1.2em",
		borderRadius: "2px",
		backgroundColor: "white"
	}
});

export default styles;
