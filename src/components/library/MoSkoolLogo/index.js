import React from "react";

import * as ROUTES from "constants/routes";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styles";

const MoSkoolLogo = ({ classes }) => {
  return (
    <Typography variant="h6" noWrap>
      <Link to={ROUTES.LANDING.path} className={classes.logo}>
        <Box fontWeight="fontWeightLight">Mo Skool</Box>
      </Link>
    </Typography>
  );
};
export default withStyles(styles)(MoSkoolLogo);
