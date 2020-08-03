/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName New Item Add Card
 *
 * Renders a card used for adding new content
 *
 * @param {Boolean} title - title for card
 * @param {Boolean} url - url for link
 * @returns {<MoTypography/>} - returns Typography component a formatted text
 *
 * @see See [React hoc](https://reactjs.org/docs/higher-order-components.html)
 * */

import React from "react";

// MUI components
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

// Mo Skool components
import MoCard from "components/library/MoCard";

import { COURSES } from "constants/i18n";

const NewItemCard = ({ title, url }) => {
  return (
    <MoCard
      IconComponent={AddCircleOutlineIcon}
      isDisabled={false}
      title={title || COURSES.ADD_A_COURSES}
      type="new"
      url={url}
    />
  );
};

export default NewItemCard;
