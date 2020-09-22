import React from "react";

const MoPageSubtitleEdit = ({
  children,
  text,
  margin,
  name,
  textAlign,
  width,
  register,
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
      outline: "none",
    },
    container: {
      width: width || "",
    },
  };

  return (
    <div style={styles.container}>
      <input
        className="MuiTypography-h4"
        name={name}
        placeholder={text || children}
        defaultValue={text || children}
        ref={register}
        style={styles.text}
      />
    </div>
  );
};

export default MoPageSubtitleEdit;
