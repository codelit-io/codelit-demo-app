const styles = theme => ({
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  img: {
    height: 100,
    width: 100
  },
  section: {
    width: "100%",
    paddingTop: theme.padding.lg,
    paddingBottom: theme.padding.lg
  },
  scoreBoard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});

export default styles;
