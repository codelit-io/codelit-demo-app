const styles = theme => ({
  button: {
    boxShadow: theme.shadow.lg,
    borderRadius: theme.space?.xs,
    "&:hover .arrow": {
      transform: "translateX(5px)"
    }
  },
  icon: {
    transition: "transform .35s"
  },
  noShadow: {
    boxShadow: "none"
  }
});

export default styles;
