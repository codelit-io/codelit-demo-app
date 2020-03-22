const styles = theme => ({
  container: {
    paddingTop: theme.padding.lg,
    paddingBottom: theme.padding.lg
  },
  heroText: {
    color: "rgb(43, 43, 43)",
    fontWeight: "500",
    lineHeight: "1.2",
    letterSpacing: "-0.01em"
  },
  heroSubtitle: {
    color: "rgb(94, 94, 94)",
    fontSize: "24px",
    lineHeight: "1.5",
    letterSpacing: "-0.01em",
    marginBottom: "24px"
  },
  img: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  checkMark: {
    color: theme.green.light
  }
});

export default styles;
