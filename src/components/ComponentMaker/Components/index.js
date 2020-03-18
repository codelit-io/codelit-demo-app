import React from "react";

const inputHtml = () => {
  return <input type="text" />;
};

const buttonHtml = () => {
  return <button type="submit">I am a boring button :)</button>;
};

const Components = {
  inputHtml: inputHtml,
  buttonHtml: buttonHtml,
  button: React.lazy(() => import("@material-ui/core/Button")),
  textField: React.lazy(() => import("@material-ui/core/TextField")),
  input: React.lazy(() => import("@material-ui/core/Input")),
  switch: React.lazy(() => import("@material-ui/core/Switch")),
  checkbox: React.lazy(() => import("@material-ui/core/Checkbox")),
  slider: React.lazy(() => import("@material-ui/core/Slider")),
  link: React.lazy(() => import("@material-ui/core/Link")),
  typography: React.lazy(() => import("@material-ui/core/Typography"))
};

export default Components;
