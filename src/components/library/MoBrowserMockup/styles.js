const styles = (theme) => ({
  editor: {
    ...theme.editorFont,
    [theme.breakpoints.up(600)]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    "& textarea": {
      fontSize: "14px",
      outline: "none",
    },
    padding: "1.25rem",
  },
  preview: {
    padding: "1.25rem",
    margin: "0 auto",
    display: "flex",
  },

  browserMockup: {
    minHeight: "60px",
    borderTop: "2em solid rgba(230, 230, 230, 0.7)",
    position: "relative",
    borderRadius: "3px 3px 0 0",
    boxShadow: theme.bigShadow,
  },
  browserButtons: {
    display: "block",
    position: "absolute",
    content: "",
    top: "-1.25em",
    left: "1em",
    width: "0.5em",
    height: "0.5em",
    borderRadius: "50%",
    backgroundColor: "#f44",
    boxShadow: "0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5",
  },
  browserFilename: {
    display: "block",
    position: "absolute",
    textAlign: "center",
    top: "-1.8em",
    left: "0em",
    width: "100%",
    height: "1.2em",
    borderRadius: "2px",
    color: "#424B54",
    fontSize: "14px",
  },
  browserHeader: {
    display: "block",
    position: "absolute",
    content: "",
    top: "-1.88em",
    left: "6.5em",
    width: "calc(100% - 7.8em)",
    height: "1.2em",
    borderRadius: "2px",
    backgroundColor: "white",
    fontSize: "14px",
    padding: "2px 2px 2px 8px",
  },
  font: theme.typography,
});

export default styles;
