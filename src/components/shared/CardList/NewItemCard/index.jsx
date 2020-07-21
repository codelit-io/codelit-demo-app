/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName New Item Add Card
 *
 * Renders a card used for adding new content
 *
 * @param {Boolean} isActive - show or hide component
 * @returns {<MoTypography/>} - returns Typography component a formatted text
 *
 * @see See [React hoc](https://reactjs.org/docs/higher-order-components.html)
 * */

import React from "react";

import * as ROUTES from "constants/routes";

// MUI components
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

// Mo Skool components
import MoCard from "components/library/MoCard";

import { COURSES } from "constants/i18n";

const NewItemCard = ({ isActive, type, url }) => {
  if (!isActive) {
    return null;
  }
  return (
    <Grow in={isActive} mountOnEnter timeout={{ enter: 200 }} unmountOnExit>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <MoCard
          IconComponent={AddCircleOutlineIcon}
          isDisabled={false}
          title={COURSES.ADD_A_COURSES}
          type={type}
          url={url + ROUTES.COLLECTIONS_ADD.path}
        />
      </Grid>
    </Grow>
  );
};

export default React.memo(NewItemCard);
