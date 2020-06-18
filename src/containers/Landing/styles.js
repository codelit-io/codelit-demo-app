const styles = (theme) => ({
	container: {
		alignItems: "center",
		paddingBottom: theme.space?.xl,
		[theme.breakpoints.down("sm")]: {
			paddingTop: theme.space?.lg,
		},
	},
	responsiveGrid: {
		[theme.breakpoints.down("sm")]: {
			paddingBottom: theme.space?.md,
		},
	},
	img: {
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	checkMark: {
		color: theme.green?.light,
	},
});

export default styles;
