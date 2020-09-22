const styles = (theme) => ({
  section: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
    paddingTop: theme.space?.lg,
    paddingBottom: theme.space?.lg,
    [theme.breakpoints.up(400)]: {
      paddingTop: theme.space?.lg,
      paddingBottom: theme.space?.lg,
    },
  },
  textAlignRight: { textAlign: "right" },
});

export default styles;
