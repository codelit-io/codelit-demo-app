const styles = (theme) => ({
  container: {
    paddingTop: theme.space?.xl,
    paddingBottom: theme.space?.xl,
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.space?.lg,
    },
  },
  responsiveGrid: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.space?.md,
    },
  },
  editorFont: theme.editorFont,
  emoji: {
    lineHeight: "1",
  },
  heroText: {
    color: theme.grey?.dark,
    marginBottom: theme.space?.sm,
  },
  img: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  checkMark: {
    color: theme.green?.light,
  },
});

export default styles;
