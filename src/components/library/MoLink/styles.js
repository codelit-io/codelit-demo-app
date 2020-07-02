const styles = theme => ({
  link: {
    fontFamily: theme.fontFamily,
    textDecoration: "none",
    padding: "0",
    color: theme.palette.primary.main,
    fontSize: "1.1rem",
    borderRadius: theme.space.xs,
    textTransform: "initial",
    fontWeight: "600",
    "&:hover .arrow": {
      transform: "translateX(5px)"
    }
  },
  icon: {
    transition: "transform .35s",
    paddingLeft: "4px",
    paddingTop: "2px"
  }
});

export default styles;
