const styles = theme => ({
  card: {
    ...theme.card,
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  disableCard: {
    backgroundColor: '#f2f2f2',
  },
  cardContent: {
    color: theme.grey.medium,
  },
  link: {
    textDecorationLine: 'none',
    '&:hover': {
      textDecorationLine: 'none',
    },
  },
  disableLink: {
    pointerEvents: 'none',
    textDecoration: 'none',
    cursor: 'default',
  },
  heroIcon: {
    fontSize: theme.fontSize.xl,
    color: theme.blue.superLight,
  },
  index: { color: theme.palette.primary.main },
});

export default styles;
