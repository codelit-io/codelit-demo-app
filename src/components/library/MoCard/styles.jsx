const styles = (theme) => ({
  card: {
    ...theme.card,
    textAlign: "center",
    paddingTop: theme.spacing(5),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    width: "100%",
  },
  disableCard: {
    opacity: "0.5",
  },
  link: {
    width: "100%",
  },
  heroIcon: {
    color: theme.grey.light,
    "& svg": {
      fontSize: theme.fontSize.xl,
      width: "64px",
      height: "64px",
    },
  },
  new: {
    border: `${theme.spacing(0.02)}rem dashed ${theme.grey.light}`,
    opacity: "0.6",
    boxShadow: "none",
  },
});

export default styles;
