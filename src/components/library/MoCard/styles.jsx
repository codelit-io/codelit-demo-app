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
    "& svg": {
      fontSize: theme.fontSize.xl,
      color: theme.blue.superLight
    }
  }
});

export default styles;
