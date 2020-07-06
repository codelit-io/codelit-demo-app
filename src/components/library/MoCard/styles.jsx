const styles = theme => ({
  card: {
    ...theme.card,
    textAlign: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    width: "100%"
  },
  disableCard: {
    backgroundColor: "#f2f2f2"
  },
  cardContent: {
    color: theme.grey.medium
  },
  link: {
    width: "100%"
  },
  heroIcon: {
    fontSize: theme.fontSize.xl,
    color: theme.blue.superLight
  },
  index: { color: theme.palette.primary.main }
});

export default styles;
