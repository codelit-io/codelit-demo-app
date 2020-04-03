import React from "react";

import * as ROUTES from "../../constants/routes";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const MoSkoolLogo = () => (
  <Typography variant="h6" noWrap>
    <Link
      to={ROUTES.LANDING.path}
      style={{ color: "#383c40", textDecoration: "none" }}
    >
      <Box fontWeight="fontWeightLight">Mo Skool</Box>
    </Link>
  </Typography>
);
export default MoSkoolLogo;
