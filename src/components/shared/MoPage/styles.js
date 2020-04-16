const styles = theme => ({
  section: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
    paddingTop: theme.padding?.lg,
    paddingBottom: theme.padding?.lg,
    [theme.breakpoints.up(400)]: {
      paddingTop: theme.padding?.lg,
      paddingBottom: theme.padding?.lg
    }
  }
});

export default styles;
