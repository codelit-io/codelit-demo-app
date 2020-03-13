const styles = theme => ({
	link: {
		backgroundColor: "none",
		textDecoration: "none",
		padding: "0px",
    color: theme.blue.medium,
		fontSize: "1.1rem",
    borderRadius: "3px",
    textTransform: "initial",
    fontWeight: "600",
		"&:hover": {
      background:"none"
		},
		"&:hover .arrow": {
      transform: "translateX(5px)",
    },
    ".arrow": {
      fontSize: "1.0rem",
    }
	}
});

export default styles;
