const styles = theme => ({
	card: {
		boxShadow: "0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)",
		"&:hover": {
			transform: "translateY(-5px)",
			backgroundColor: "#FFF"
		},
		"&:hover .desc": {
			color: "#1890ff"
		},
		transition:
			"transform .35s cubic-bezier(.4,0,.2,1),box-shadow .35s cubic-bezier(.4,0,.2,1)",
		transform: "translateY(0)"
	},
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
