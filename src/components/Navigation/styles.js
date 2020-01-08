import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	container: {
		alignItems: "center",
	},
	title: {
		textAlign: "center",
		alignSelf: "center",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: 120,
			"&:focus": {
				width: 200
			}
		}
	},
	avatar: {
		float: "right"
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	appBar: {
		boxShadow: "none"
	}
}));


export default useStyles;