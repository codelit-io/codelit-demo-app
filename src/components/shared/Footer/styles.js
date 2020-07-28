const styles = theme => ({
  container: {
    paddingTop: theme.space.xl
  },
  footerText: {
    textAlign: "right"
  },
  footerButton: {
    textTransform: "initial"
  },
  footer: {
    zIndex: "10",
    position: "fixed",
    bottom: "0.25rem",
    right: 0,
    width: "100%"
  }
});

export default styles;
