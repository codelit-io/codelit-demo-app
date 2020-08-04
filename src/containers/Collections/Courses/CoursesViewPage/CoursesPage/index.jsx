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
import Grow from "@material-ui/core/Grow";
import Navigation from "components/shared/Navigation";
import SignUpCard from "components/shared/CardList/SignUpCard";
import NewItemCard from "components/shared/CardList/NewItemCard";

const CardList = lazy(() => import("components/shared/CardList"));

const CoursesPage = ({
  authUser,
  collectionDetails,
  courses,
  firebase,
  isLoading,
  isAdmin,
  itemOptions
}) => {
  return (
    <Container maxWidth="lg">
      <Navigation authUser={authUser} firebase={firebase} />
      <MoPage title={collectionDetails?.title}>
        <Grow
          in={!isLoading}
          mountOnEnter
          timeout={{ enter: 400, exit: 400 }}
          unmountOnExit
        >
          <Grid container spacing={4} alignItems="center">
            <CardList
              isAdmin={isAdmin}
              items={courses}
              itemOptions={itemOptions}
            />
            {!!isAdmin && !courses?.isLoading && (
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <NewItemCard
                  type="new"
                  title={itemOptions?.newItem?.title}
                  url={itemOptions?.newItem?.url}
                />
              </Grid>
            )}
            {!itemOptions?.authUser && !courses?.isLoading && (
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <SignUpCard />
              </Grid>
            )}
          </Grid>
        </Grow>
        <Footer />
      </MoPage>
    </Container>
  );
};

export default CoursesPage;
