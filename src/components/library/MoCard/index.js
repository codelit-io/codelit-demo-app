import React from "react";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";

const MoCard = ({ item, index, IconComponent, isDisabled, classes, url }) => (
  <Link to={url} className={isDisabled ? classes.disableLink : classes.link}>
    <div className={`${classes.card} ${isDisabled && classes.disableCard}`}>
      <Grid container spacing={4} className={classes.content}>
        <Grid
          item
          className={classes.cardContent}
          xs={2}
          sm={12}
          md={12}
          lg={12}
        >
          {IconComponent && <IconComponent className={classes.heroIcon} />}
        </Grid>
        <Grid
          item
          className={classes.cardContent}
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {item.title ? item.title || item.topic || item.label : "No Name"}
          </Typography>
          <Typography className={classes.editorFont} component="p" gutterBottom>
            {(item.subtitle && item.subtitle) || item.desc || item.language}
          </Typography>
          <Typography className={classes.editorFont} component="p" gutterBottom>
            {item.content}
          </Typography>
        </Grid>
      </Grid>
    </div>
  </Link>
);

export default withStyles(styles)(MoCard);
