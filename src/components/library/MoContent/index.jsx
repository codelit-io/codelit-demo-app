import React from "react";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Grow from "@material-ui/core/Grow";
import styles from "./styles";

const MoContent = ({ classes, content }) => (
  <Grid container spacing={4}>
    <Grid item md={12}>
      <Grow
        in={content && true}
        mountOnEnter
        timeout={{ enter: 800, exit: 800 }}
        unmountOnExit
      >
        <Card className={classes.card}>
          <Typography variant="h6" gutterBottom className={classes.content}>
            <Box fontWeight="fontWeightLight">{content}</Box>
          </Typography>
        </Card>
      </Grow>
    </Grid>
  </Grid>
);

export default withStyles(styles)(MoContent);
