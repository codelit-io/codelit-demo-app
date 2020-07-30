/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Paper elements container
 *
 * Layout for components and includes shadow and hover effect
 *
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
 * @param {Boolean} isDisabled - boolean flag to disable card, navigation and greys out the card
 * @withStyle - HOC provides classes object to component for styling
 *
 * */

import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import styles from "./styles";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";

const MoPaper = ({
  classes,
  children,
  isDisabled,
  textAlign = "left",
  maxWidth = "lg"
}) => (
  <Paper
    elevation={3}
    className={`${classes.card} ${isDisabled && classes.disableCard}`}
    style={{ textAlign }}
  >
    <Container maxWidth={maxWidth}>{children}</Container>
  </Paper>
);

MoPaper.propTypes = {
  isDisabled: PropTypes.bool,
  textAlign: PropTypes.string
};

export default withStyles(styles)(MoPaper);
