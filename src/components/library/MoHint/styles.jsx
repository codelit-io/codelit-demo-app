const styles = (theme) => ({
	container: {
		marginTop: theme.space?.md,
	},
	text: {
		...theme.editorFont,
		color: theme.palette.primary.main,
		marginBottom: theme.space?.md,
	},
});

export default styles;
