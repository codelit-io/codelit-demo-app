const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(6))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card: theme.card,
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(4)
  },
  submit: {
    marginTop: theme.spacing(3)
  },
  error: {
    marginTop: theme.spacing(3)
  }
});

export default styles;
