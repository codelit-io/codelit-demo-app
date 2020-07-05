const styles = theme => ({
  container: {
    textAlign: 'center',
  },
  snackbarContent: {
    backgroundColor: 'white',
    color: 'black',
    padding: theme.space.md,
    boxShadow: theme.bigShadow,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  checkIcon: {
    color: ' #99bb33',
    fontSize: '40px',
    marginRight: '20px',
  },
});

export default styles;
