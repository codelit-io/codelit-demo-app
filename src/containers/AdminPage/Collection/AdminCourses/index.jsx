import React, { lazy } from "react";

import Grid from "@material-ui/core/Grid";
import useCollections from "hooks/useCollections";
import useGlobal from "store";

const CardList = lazy(() => import("components/shared/CardList"));

const AdminCourses = ({ match }) => {
  const [{ authUser, userRole, firebase }] = useGlobal();

  const courses = useCollections({ collectionPath: "courses" }, firebase);
  if (!courses?.data) {
    return null;
  }

  const itemOptions = {
    authUser,
    // Top right component of the card
    // ActionComponent: ,
    // Configure url route for each item
    itemUrl: (doc) => itemUrl(doc),
    // isItemDisabled is configured based on points and question's id
    isItemDisabled: () => {},
    firebase,
    newItem: { title: "Add nre Couree  ", url: "courses/isEditMode" },
    match
  };

  const itemUrl = (doc) => `courses/${doc}`;

  return (
    <Grid container spacing={4} alignItems="center">
      <CardList
        isAdmin={userRole?.isAdmin}
        items={courses.data}
        itemOptions={itemOptions}
      />
    </Grid>
  );
};

export default AdminCourses;
