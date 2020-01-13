const styles = theme => ({
	linkText: {
		color: "#383c40",
		textTransform: "capitalize",
		textDecoration: "none",
		verticalAlign: "middle"
	},
	header: {
		marginBottom: "40px",
		textAlign: "center"
	},
	arrowSection: {
        display:"none",
        [theme.breakpoints.up("md")]: {
            display: "block"
        }
	}
});

export default styles;
