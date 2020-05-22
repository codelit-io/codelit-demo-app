import React from "react";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

const MoPageSubtitle = ({
  children,
  isAdmin,
  subtitle,
  margin,
  textAlign,
  width,
}) => {
  const styles = {
    text: {
      color: "#383c40",
      verticalAlign: "middle",
      textAlign: textAlign ? textAlign : "",
      margin: margin ? margin : "",
      "&:hover": {
        textDecoration: isAdmin ? "underline" : "none",
      },
    },
    container: {
      width: width ? width : "",
      "&:hover": {
        textDecoration: isAdmin ? "underline" : "none",
      },
    },
  };

  return (
    <Fade in={true} timeout={{ enter: 800 }}>
      <Typography variant="h4" style={styles.container}>
        <Box fontWeight="fontWeightLight" style={styles.text}>
          {subtitle} {children}
        </Box>
      </Typography>
    </Fade>
  );
};

export default MoPageSubtitle;
