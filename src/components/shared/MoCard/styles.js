const styles = theme => ({
	card: theme.card,
	disableCard: {
		backgroundColor: "#f2f2f2"
	},
	content: {
		padding: 20,
		display: "flex",
		flexDirection: "column"
	},
	cardContent: {
		textAlign: "center"
	},
	img: {
		backgroundSize: "contain",
		height: 280,
		width: 200
	},
	link: {
		textDecorationLine: "none",
		"&:hover": {
			textDecorationLine: "none"
		}
	},
	disableLink: {
		pointerEvents: "none",
		textDecoration: "none",
		cursor: "default"
	},
	lockIcon: {
		color: "#a6a6a6",
		position: "absolute",
		top: "10px",
		right: "10px"
	}
})

export default styles;
