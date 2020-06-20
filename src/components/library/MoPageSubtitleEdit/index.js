import React from "react";

import Fade from "@material-ui/core/Fade";

const MoPageSubtitleEdit = ({
  children,
  subtitle,
  margin,
  name,
  textAlign,
  width,
  register
}) => {
  const styles = {
    text: {
      color: "#383c40",
      verticalAlign: "middle",
      textDecoration: "none",
      textAlign: textAlign || "",
      margin: margin || "",
      width: "100%",
      border: "none",
      outline: "none"
    },
    container: {
      width: width || ""
    }
  };

  return (
    <Fade in timeout={{ enter: 800 }}>
      <div style={styles.container}>
        <input
          className="MuiTypography-h4"
          name={name}
          placeholder={subtitle || children}
          defaultValue={subtitle || children}
          ref={register}
          style={styles.text}
        />
      </div>
    </Fade>
  );
};

export default MoPageSubtitleEdit;
