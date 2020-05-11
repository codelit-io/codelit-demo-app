const styles = (theme) => ({
  link: {
    backgroundColor: theme.blue?.medium,
    textDecoration: "none",
    padding: "12px 22px",
    color: theme.white?.medium,
    fontSize: "1.1rem",
    borderRadius: "3px",
    textTransform: "initial",
    fontWeight: "600",
    "&:hover": {
      background: theme.grey?.dark,
    },
    "&:hover arrow": {
      transform: "translateX(5px)",
    },
  },
  icon: {
    paddingLeft: "4px",
  },
});

export default styles;
