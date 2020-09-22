import React from "react";

import { ReactComponent as Js } from "assets/js.svg";
import { ReactComponent as Html } from "assets/html.svg";
import { ReactComponent as ReactJsx } from "assets/react-jsx.svg";
import { ReactComponent as ReactStyle } from "assets/react-style.svg";

import LockIcon from "@material-ui/icons/Lock";

const itemTypes = {
  js: () => <Js />,
  html: () => <Html />,
  reactJsx: () => <ReactJsx />,
  reactStyle: () => <ReactStyle />,
  disabled: () => <LockIcon />,
};

export default itemTypes;
