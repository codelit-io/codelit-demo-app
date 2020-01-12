const styles = theme => ({
	root: {
		flexGrow: 1
	},
	container: {
		alignItems: "center"
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
	adminAvatar: {
		border: "3px solid #c4f235",
		"&::after": {
			content: '"Admin"',
			color: "black",
			height: 10,
			marginTop: 10,
			fontSize: "10px",
			position: "absolute"
		}
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	appBar: {
		boxShadow: "none",
		backgroundColor: "transparent"
	}
});

export default styles;
