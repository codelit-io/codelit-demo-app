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
	content: {
		padding: 20,
		display: "flex",
		flexDirection: "column"
	},
	img: {
		height: 100,
		width: 100
	}
});

export default styles;
