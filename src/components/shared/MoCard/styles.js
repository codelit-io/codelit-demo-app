import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	card: {
		boxShadow: "0 0 51px 0 rgba(0,0,0,.08), 0 6px 18px 0 rgba(0,0,0,.05)",
		maxWidth: 345,
		"&:hover": {
			// boxShadow: "0 0 51px 0 rgba(0,0,0,.08), 0 6px 18px 0 rgba(0,0,0,.05)",
			transform: "translateY(-5px)",
			backgroundColor: "#FFF"
		},
		"&:hover .desc": {
			color: "#1890ff"
		}
	},
	content: {
		padding: 20,
		display: "flex",
		flexDirection: "column"
	},
	img: {
		height: 100,
		width: 100
	},
	link: {
		textDecorationLine: "none",
		"&:hover": {
			textDecorationLine: "none"
		}
	}
});

export default useStyles;
