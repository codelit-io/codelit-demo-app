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
    "&:hover .arrow": {
      transform: "translateX(5px)",
    },
  },
  icon: {
    transition: "transform .35s",
    paddingLeft: "4px",
    paddingTop: "2px",
  },
});

export default styles;
