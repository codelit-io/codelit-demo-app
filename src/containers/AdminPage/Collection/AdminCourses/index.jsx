import React, { lazy } from "react";

import { withAuthentication } from "components/shared/Session";
import Grid from "@material-ui/core/Grid";
import useCollections from "hooks/useCollections";
import useUserRole from "hooks/useUserRole";

const CardList = lazy(() => import("components/shared/CardList"));

const AdminCourses = ({ authUser, firebase }) => {
  const userRole = useUserRole(authUser);
  const courses = useCollections({ collectionPath: "courses" }, firebase);
  if (!courses?.data) {
    return null;
  }

  const itemUrl = doc => `courses/${doc}`;
  const newItemUrl = `courses/`;

  return (
    <Grid container spacing={4} alignItems="center">
      <CardList
        authUser={authUser}
        isAdmin={userRole.isAdmin}
        items={courses.data}
        isItemDisabled={() => {}}
        itemUrl={doc => itemUrl(doc)}
        newItemUrl={newItemUrl}
      />
    </Grid>
  );
};
export default withAuthentication(AdminCourses);
