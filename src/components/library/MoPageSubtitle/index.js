/**
 * Displays subtitles for all pages
 * @param {any || Component} children - Passed from parent container and has everything about the logged in user
 * @param {Boolean} isAdmin - Admin flag to display extra protected info
 * @param {String} text - Text displayed for the subtitle
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Number} margin - optional -Margin for this component
 * @param {String} textAlign - optional - Alignment of text, left, right or center
 * @param {Number} width - optional - Width of the subtitle
 */

import React from "react";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

const MoPageSubtitle = ({
  children,
  isAdmin,
  text,
  margin,
  textAlign,
  width
}) => {
  const styles = {
    text: {
      color: "#383c40",
      verticalAlign: "middle",
      textAlign: textAlign || "",
      margin: margin || "",
      "&:hover": {
        textDecoration: isAdmin ? "underline" : "none"
      }
    },
    container: {
      width: width || "",
      "&:hover": {
        textDecoration: isAdmin ? "underline" : "none"
      }
    }
  };

  return (
    <Fade in timeout={{ enter: 800 }}>
      <Typography variant="h4" style={styles.container}>
        <Box fontWeight="fontWeightLight" style={styles.text}>
          {text} {children}
        </Box>
      </Typography>
    </Fade>
  );
};

export default MoPageSubtitle;
