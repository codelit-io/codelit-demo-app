/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Course Card
 *
 * Used to display each course as a card in the list of courses
 * Used in CoursesList
 *
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
 * @param {String} content - text content shows under subtitle
 * @param {Element} IconComponent - Component icon passed to card from parent
 * @param {Boolean} isDisabled - boolean flag to disable card, navigation and greys out the card
 * @param {Number} points - Number of points for the course
 * @param {String} subtitle - Text displayed under the title
 * @param {String} title - Main text for the card
 * @param {String} url - Router link to the course, looks like PATH_TO_COLLECTION/PATH_TO_DOC
 * @withStyle - HOC provides classes object to component for styling
 *
 * @see See [React hoc](https://reactjs.org/docs/higher-order-components.html)
 * */

import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./styles";
import PropTypes from "prop-types";

const MoCard = ({
  classes,
  content,
  IconComponent,
  isDisabled,
  index,
  points,
  subtitle,
  title,
  url
}) => (
  <ButtonBase
    component={Link}
    to={url}
    disabled={isDisabled}
    className={classes.link}
  >
    <Paper className={`${classes.card} ${isDisabled && classes.disableCard}`}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2" component="h1" className={classes.heroIcon}>
            {IconComponent && <IconComponent />}
            {!IconComponent && index && index}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography gutterBottom variant="h5" component="h2">
            {title ? title : "Empty Title"}
          </Typography>
          <Typography className={classes.subtitle} component="h6" gutterBottom>
            {subtitle}
          </Typography>
          <Typography className={classes.subtitle} component="p" gutterBottom>
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </ButtonBase>
);

MoCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  IconComponent: PropTypes.elementType,
  isDisabled: PropTypes.bool.isRequired,
  points: PropTypes.number,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(MoCard);
