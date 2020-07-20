const styles = theme => ({
  container: {
    textAlign: "center"
  },
  snackbarContent: {
    padding: theme.space.md,
    boxShadow: theme.shadows[3]
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  checkIcon: {
    color: " #99bb33",
    fontSize: "40px",
    marginRight: "20px"
  }
});

export default styles;
