/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Category Item
 *
 * Category for an item is displayed on top of the card representing the category of the cards below it
 *
 * @param {String} index - index of the item
 * @param {String} text - category string
 * @returns {<MoTypography/>} - returns Typography component a formatted text
 *
 * @see See [React hoc](https://reactjs.org/docs/higher-order-components.html)
 * */
import React from "react";

// Mo Skool library components
import MoTypography from "components/library/MoTypography";

// MUI components
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";

const CategoryItem = ({ index, text }) =>
  text ? (
    <Fade in={text && true} mountOnEnter timeout={{ enter: 200 }} unmountOnExit>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <MoTypography
          font="breeSerif"
          marginTop={index > 1 ? "md" : null}
          text={text}
          variant="h6"
        ></MoTypography>
      </Grid>
    </Fade>
  ) : null;

export default CategoryItem;
