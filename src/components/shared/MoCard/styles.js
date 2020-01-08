import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	card: {
		boxShadow: "0 0 51px 0 rgba(0,0,0,.08), 0 6px 18px 0 rgba(0,0,0,.05)",
		"&:hover": {
			// boxShadow: "0 0 51px 0 rgba(0,0,0,.08), 0 6px 18px 0 rgba(0,0,0,.05)",
			transform: "translateY(-5px)",
			backgroundColor: "#FFF"
		},
		"&:hover .desc": {
			color: "#1890ff"
		},
		transition: "transform .35s cubic-bezier(.4,0,.2,1),box-shadow .35s cubic-bezier(.4,0,.2,1)",
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
		textAlign: "center",
	},
	img: {
		height: 200,
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
		right: "10px",
	}
});

export default useStyles;
