import React from "react";

import * as ROUTES from "constants/routes";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styles";

const MoSkoolLogo = ({ classes }) => {
  return (
    <Button
      component={Link}
      to={ROUTES.LANDING.path}
      className={classes.logo}
      color="primary"
    >
      <Box fontWeight="fontWeightLight">Mo Skool</Box>
    </Button>
  );
};
export default withStyles(styles)(MoSkoolLogo);
