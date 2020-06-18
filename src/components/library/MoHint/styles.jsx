const styles = (theme) => ({
	container: {
		marginTop: theme.space?.md,
	},
	text: { ...theme.editorFont, color: theme.palette.primary.main },
});

export default styles;
