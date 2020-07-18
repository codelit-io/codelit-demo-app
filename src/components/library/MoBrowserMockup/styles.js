const styles = theme => ({
  editor: {
    ...theme.editorFont,
    [theme.breakpoints.up(600)]: {
      marginLeft: "auto",
      marginRight: "auto"
    },
    "& textarea": {
      fontSize: "14px",
      outline: "none"
    },
    padding: theme.space.sm2
  },
  preview: {
    padding: theme.space.sm2,
    margin: "0 auto",
    display: "flex"
  },

  browserMockup: {
    padding: "1.75rem",
    minHeight: "10rem",
    position: "relative",
    borderRadius: theme.space.xs,
    boxShadow: theme.shadow.lg
  }
});

export default styles;
