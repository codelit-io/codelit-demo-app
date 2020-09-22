/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Course Card
 *
 * Used to display each course as a card in the list of courses
 * Used in CoursesList
 *
 * Example itemOptions
 *
 *   const itemOptions = {
 *      authUser,
 *      // Top right component of the card
 *      ActionComponent: ,
 *      doc,
 *      // Configure url route for each item
 *      itemUrl: id => `${doc}/${id}`,
 *      // isItemDisabled is configured based on points and question's id
 *      isItemDisabled: id => doSomething,
 *      firebase,
 *      newItem: {title: "TITLE", url: "someDocument/1/isEditMode"}
 *      match
 *    }
 *
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
 * @param {String} content - text content shows under subtitle
 * @param {Element} IconComponent - Component icon passed to card from parent
 * @param {Boolean} itemOptions - options to configure the card to handle special cases and logic
 * @param {Boolean} isDisabled - boolean flag to disable card, navigation and greys out the card
 * @param {Number} points - Number of points for the course
 * @param {String} subtitle - Text displayed under the title
 * @param {String} title - Main text for the card
 * @param {String} type - Courses type e.g. "new" for Add new content, or "signup" for sign up card
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
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import styles from "./styles";
import PropTypes from "prop-types";

const MoCard = ({
  itemOptions,
  classes,
  content,
  IconComponent,
  isDisabled,
  index,
  item,
  subtitle,
  title,
  type,
  url,
}) => {
  return (
    <Grow in={true} timeout={{ enter: 600 }}>
      <ButtonBase
        component={Link}
        to={url}
        disabled={isDisabled}
        className={classes.link}
      >
        <Paper
          elevation={3}
          className={`${classes.card} ${isDisabled && classes.disableCard} ${
            type && classes[type]
          }`}
        >
          <Grid container alignContent="flex-start" alignItems="flex-start">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography
                variant="h2"
                component="h1"
                className={classes.heroIcon}
              >
                {!IconComponent && index && index}
                {IconComponent && <IconComponent />}
              </Typography>
              <Typography gutterBottom variant="h4" component="h4">
                {title ? title : "Empty Title"}
              </Typography>
              <Typography
                className={classes.subtitle}
                component="h6"
                gutterBottom
              >
                {subtitle}
              </Typography>
              <Typography
                className={classes.subtitle}
                component="p"
                gutterBottom
              >
                {content}
              </Typography>
            </Grid>
            {itemOptions?.ActionComponent && (
              <itemOptions.ActionComponent
                authUser={itemOptions.authUser}
                item={item}
                match={itemOptions.match}
              />
            )}
          </Grid>
        </Paper>
      </ButtonBase>
    </Grow>
  );
};

MoCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  IconComponent: PropTypes.elementType,
  isDisabled: PropTypes.bool,
  points: PropTypes.number,
  url: PropTypes.any,
};

export default withStyles(styles)(MoCard);
