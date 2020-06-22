import React from "react";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

const MoParagraph = ({ text, fade, textAlign, margin, width }) => {
  const styles = {
    text: {
      color: "#383c40",
      verticalAlign: "middle",
      textDecoration: "none",
      textAlign: textAlign || "",
      margin: margin || "",
      lineHeight: "3rem",
      fontSize: "2rem"
    },
    container: {
      width: width || ""
    }
  };
  return (
    <Fade in={fade} mountOnEnter timeout={{ enter: 800 }} unmountOnExit>
      <Typography variant="subtitle1">
        <Box fontWeight="fontWeightLight" style={styles.text}>
          {text}
        </Box>
      </Typography>
    </Fade>
  );
};

export default MoParagraph;
