const styles = theme => ({
  text: {
    ...theme.editorFont,
    color: theme.palette.yinYang.main,
    backgroundColor: theme.palette.yinYang.background,
    textDecoration: "none",
    marginBottom: theme.space?.md,
    width: "100%",
    border: "none",
    outline: "none"
  }
});

export default styles;
