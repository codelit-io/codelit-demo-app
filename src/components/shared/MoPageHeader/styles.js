const styles = (theme) => ({
  title: {
    color: theme.grey?.dark,
    textDecoration: "none",
    marginBottom: theme.padding?.md,
  },
  titleHover: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default styles;
