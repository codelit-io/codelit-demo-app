/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Card List Component
 *
 * Loops over an item list of questions or courses and then renders components with specific logic
 *
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Boolean} itemUrl - Url or Route for each item
 * @param {Boolean} isAdmin - Flag if user is an admin
 * @param {Boolean} isItemDisabled - Flag if item is disabled
 * @param {Array} items - Items as an array and has all data from db
 * @param {Boolean} newItemUrl - Url or Route for adding a new item
 *
 * @returns {<MoTypography/>} - returns Typography component a formatted text
 *
 * @see See [React hoc](https://reactjs.org/docs/higher-order-components.html)
 * */

import React, { lazy } from "react";

import itemTypes from "./itemTypes";
import SignUpCard from "./SignUpCard";
import NewItemCard from "./NewItemCard";

const CardItem = lazy(() => import("./CardItem"));
const CategoryItem = lazy(() => import("./CategoryItem"));

const CardList = ({
  authUser,
  itemUrl,
  isAdmin,
  isItemDisabled,
  items,
  newItem
}) => {
  return items.map((item, index) => {
    // Detect if item is disabled
    const isDisabled = item.isDisabled
      ? item.isDisabled
      : isItemDisabled(item.id);

    // Configure url route for each item
    const configureUrl = isDisabled ? "" : itemUrl(item.doc || item.id);

    // Icon Component for item types
    const IconComponent = item.isDisabled
      ? itemTypes.disabled
      : itemTypes[item.type];

    return (
      <React.Fragment key={index}>
        <CategoryItem index={index} text={item?.category} />
        <NewItemCard
          isActive={index < 1 && !!isAdmin}
          type="new"
          title={newItem?.title}
          url={newItem?.url}
        />
        <SignUpCard isActive={index < 1 && !authUser} type="signup" />
        <CardItem
          IconComponent={IconComponent}
          index={index}
          isDisabled={isDisabled}
          subtitle={item.subtitle}
          title={item.title}
          type={item.type}
          url={item.url || configureUrl}
        />
      </React.Fragment>
    );
  });
};

export default CardList;
