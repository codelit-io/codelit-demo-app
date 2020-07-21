/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Card Item
 *
 * Renders an item in a card and used with CardList to display a list of cards
 * Each card has an Icon, title and subtitle and it works with all content types
 *
 * @param {Element} IconComponent - MUI Icon component or sn SVG Icon Component
 * @param {Number} index - Index of an item
 * @param {Boolean} isDisabled - Disabling a card removes the url and greys out the card
 * @param {String} subtitle - Subtitle text for the card
 * @param {String} title - Title text for the card
 * @param {String} type - Type of item e.g. html or react if it's a course
 * @param {String} url - Route to a relate path withing the app
 * @returns {<MoTypography/>} - returns Typography component a formatted text
 *
 * @see See [React hoc](https://reactjs.org/docs/higher-order-components.html)
 * */

import React from "react";

// MUI components
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";

// Mo Skool components
import MoCard from "components/library/MoCard";

const CardItem = ({
  IconComponent,
  index,
  isDisabled,
  subtitle,
  title,
  type,
  url
}) => (
  <Grow in={title && true} mountOnEnter timeout={{ enter: 200 }} unmountOnExit>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <MoCard
        IconComponent={IconComponent}
        // Add one to offset for the first card from 0 to 1
        index={index + 1}
        isDisabled={isDisabled}
        subtitle={subtitle}
        title={title}
        type={type}
        url={url}
      />
    </Grid>
  </Grow>
);

export default React.memo(CardItem);
