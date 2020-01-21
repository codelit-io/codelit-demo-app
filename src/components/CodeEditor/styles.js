const styles = theme => ({
	editor: {
		background: "#fff",
		borderRadius: "8px",
		boxShadow:
			"0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)",
		width: "100%",
        height: "300px",
        [theme.breakpoints.up(500)]: {
			width: "380",
			marginLeft: "auto",
			marginRight: "auto"
		}
	},
	preview: {
		// background: "#fff",
		borderRadius: "8px"
		// padding: "10px",
		// boxShadow:"0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)",
		// width: "100%"
	},
	error: {
		background: "rgb(255, 85, 85)",
		color: "rgb(248, 248, 242)",
		padding: "10px",
		borderRadius: "8px",
		boxShadow:
			"0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)"
	}
});

export default styles;
