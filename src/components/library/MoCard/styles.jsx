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
    color: theme.grey.light,
    "& svg": {
      fontSize: theme.fontSize.xl
    }
  },
  new: {
    border: `${theme.spacing(0.02)}rem dashed ${theme.grey.light}`,
    opacity: "0.6",
    boxShadow: "none"
  }
});

export default styles;
