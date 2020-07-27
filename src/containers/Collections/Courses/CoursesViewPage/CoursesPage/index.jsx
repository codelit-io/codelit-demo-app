/**
 * Collections is a container that fetches firebase data using hooks and renders a list of all collections
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} collection - Passed from parent with a title and a path of the collection
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @returns {<CoursePage/>} - returns CoursePage component which contains the rest of the components
 */

import React, { lazy } from "react";

import Footer from "components/shared/Footer";
import MoPage from "components/library/MoPage";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navigation from "components/shared/Navigation";

const CardList = lazy(() => import("components/shared/CardList"));

const CoursesPage = ({
  authUser,
  collectionDetails,
  courses,
  itemUrl,
  isAdmin,
  newItem
}) => {
  return (
    <Container maxWidth="lg">
      <Navigation />
      <MoPage title={collectionDetails?.title}>
        <Grid container spacing={4} alignItems="center">
          <CardList
            authUser={authUser}
            items={courses}
            isAdmin={isAdmin}
            itemUrl={doc => itemUrl(doc)}
            isItemDisabled={() => {}}
            newItem={newItem}
          />
        </Grid>
        <Footer />
      </MoPage>
    </Container>
  );
};

export default CoursesPage;
