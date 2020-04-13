const styles = (theme) => ({
	content: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
	},
	img: {
		height: 100,
		width: 100,
	},
	section: {
		maxHeight: "100%",
		height: "100%",
		width: "100%",
		paddingTop: theme.padding?.md,
		paddingBottom: theme.padding?.md,
		[theme.breakpoints.up(400)]: {
			paddingTop: theme.padding?.lg,
			paddingBottom: theme.padding?.xl,
		},
	},
	component: {
		display: "flex",
		alignItems: "baseline",
		[theme.breakpoints.up(400)]: {
			justifyContent: "flex-end",
		},
	},
});

export default styles;
