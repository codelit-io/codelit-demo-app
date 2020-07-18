const lightTheme = {
  plain: {
    color: "#4D4D4C"
  },
  styles: [
    {
      types: ["prolog", "comment", "doctype", "cdata"],
      style: {
        color: "hsl(30, 20%, 50%)"
      }
    },
    {
      types: ["property", "tag", "boolean", "number", "constant", "symbol"],
      style: { color: "#C82829" }
    },
    {
      types: ["attr-name", "string", "char", "builtin", "insterted"],
      style: {
        color: "#C82829"
      }
    },
    {
      types: [
        "operator",
        "entity",
        "url",
        "string",
        "variable",
        "language-css"
      ],
      style: {
        color: "#718C00"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["regex", "important"],
      style: {
        color: "#e90"
      }
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: {
        color: "#718C00"
      }
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        opacity: "0.7"
      }
    }
  ]
};

export default lightTheme;
