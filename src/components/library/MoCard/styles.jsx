const styles = theme => ({
  card: {
    ...theme.card,
    textAlign: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    width: "100%"
  },
  disableCard: {
    opacity: "0.5"
  },
  link: {
    width: "100%"
  },
  heroIcon: {
    color: theme.blue.superLight,
    "& svg": {
      fontSize: theme.fontSize.xl
    }
  }
});

export default styles;
