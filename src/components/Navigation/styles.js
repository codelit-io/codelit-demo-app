const styles = theme => ({
  root: {
    flexGrow: 1
  },
  alignCenter: theme.flexAlignCenter,
  title: {
    textAlign: "center",
    alignSelf: "center",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  toolbar: {
    padding: "0"
  },
  appBar: {
    boxShadow: "none",
    backgroundColor: "transparent",
    marginBottom: "96px"
  },
  MoSkool: {
    textAlign: "left"
  }
});

export default styles;
