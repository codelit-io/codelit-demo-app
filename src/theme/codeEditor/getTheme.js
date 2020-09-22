/**
 *
 * Returns an object with custom styling used for code editor
 * @param {boolean} { isDarkMode }
 */
const getTheme = ({ isDarkMode }) => {
  const primary = isDarkMode ? "#42b9e0" : "#006080";
  const secondary = isDarkMode ? "#ff77c8" : "#9c005d";
  const tertiary = isDarkMode ? "#6ec568" : "#065f00";
  const plain = isDarkMode ? "#ffffff" : "#4D4D4C";
  const yinYang = isDarkMode ? "#a6a6a6" : "black";

  return {
    plain: {
      color: plain,
    },
    styles: [
      {
        types: ["prolog", "comment", "doctype", "cdata"],
        style: {
          color: "hsl(30, 20%, 50%)",
        },
      },
      {
        types: ["property", "tag", "boolean", "number", "constant", "symbol"],
        style: { color: primary },
      },
      {
        types: ["attr-name", "string", "char", "builtin", "insterted"],
        style: {
          color: secondary,
        },
      },
      {
        types: [
          "operator",
          "entity",
          "url",
          "string",
          "variable",
          "language-css",
        ],
        style: {
          color: tertiary,
        },
      },
      {
        types: ["deleted"],
        style: {
          color: "rgb(255, 85, 85)",
        },
      },
      {
        types: ["italic"],
        style: {
          fontStyle: "italic",
        },
      },
      {
        types: ["important", "bold"],
        style: {
          fontWeight: "bold",
        },
      },
      {
        types: ["regex", "important"],
        style: {
          color: "#e90",
        },
      },
      {
        types: ["atrule", "attr-value", "keyword"],
        style: {
          color: primary,
        },
      },
      {
        types: ["punctuation", "symbol"],
        style: {
          color: yinYang,
          opacity: "0.7",
        },
      },
    ],
  };
};

export default getTheme;
