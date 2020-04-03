const styles = theme => ({
  root: {
    flexGrow: 1,

    paddingBottom: theme.padding?.lg
  },
  alignCenter: theme.flexAlignCenter,
  toolbar: {
    padding: "0"
  },
  appBar: {
    boxShadow: "none",
    backgroundColor: "transparent"
  }
});

export default styles;
