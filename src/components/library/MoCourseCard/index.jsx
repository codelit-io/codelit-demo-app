/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Course Card
 *
 * Used to display each course as a card in the list of courses
 * Used in CourseList
 *
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
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

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import PropTypes from "prop-types";

const MoCourseCard = ({
  classes,
  IconComponent,
  isDisabled,
  points,
  subtitle,
  title,
  url
}) => (
  <Link to={url} className={isDisabled ? classes.disableLink : classes.link}>
    <div className={`${classes.card} ${isDisabled && classes.disableCard}`}>
      <Grid container spacing={4}>
        {IconComponent && (
          <Grid
            item
            className={classes.cardContent}
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <IconComponent className={classes.heroIcon} />
          </Grid>
        )}
        <Grid
          item
          className={classes.cardContent}
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {title ? title : "Empty Title"}
          </Typography>
          <Typography className={classes.subtitle} component="h6" gutterBottom>
            {subtitle ? subtitle : "Empty Subtitle"}
          </Typography>
        </Grid>
      </Grid>
    </div>
  </Link>
);

MoCourseCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  IconComponent: PropTypes.elementType,
  isDisabled: PropTypes.bool.isRequired,
  points: PropTypes.number,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(MoCourseCard);
