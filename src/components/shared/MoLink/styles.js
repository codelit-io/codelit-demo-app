const styles = (theme) => ({
  link: {
    fontFamily: theme.fontFamily,
    textDecoration: "none",
    padding: "0",
    color: theme.blue?.medium,
    fontSize: "1.1rem",
    borderRadius: "3px",
    textTransform: "initial",
    fontWeight: "600",
    "&:hover arrow": {
      transform: "translateX(5px)",
    },
    "&.arrow": {
      fontSize: "1rem",
      paddingLeft: "4px",
    },
  },
});

export default styles;
