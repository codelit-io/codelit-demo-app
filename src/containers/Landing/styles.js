const styles = (theme) => ({
  container: {
    paddingTop: theme.padding?.xl,
    paddingBottom: theme.padding?.xl,
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.padding?.lg,
    },
  },
  responsiveGrid: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.padding?.md,
    },
  },
  editorFont: theme.editorFont,
  emoji: {
    lineHeight: "1",
  },
  heroText: {
    color: theme.grey?.dark,
    marginBottom: theme.padding?.sm,
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
