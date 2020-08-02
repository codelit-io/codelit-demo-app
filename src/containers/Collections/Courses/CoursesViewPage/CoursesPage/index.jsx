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
import Fade from "@material-ui/core/Fade";
import Navigation from "components/shared/Navigation";
import SignUpCard from "components/shared/CardList/SignUpCard";
import NewItemCard from "components/shared/CardList/NewItemCard";

const CardList = lazy(() => import("components/shared/CardList"));

const CoursesPage = ({ collectionDetails, courses, isAdmin, itemOptions }) => {
  return (
    <Container maxWidth="lg">
      <Navigation />
      <MoPage title={collectionDetails?.title}>
        <Grid container spacing={4} alignItems="center">
          <Fade
            in={!!isAdmin}
            mountOnEnter
            timeout={{ enter: 200, exit: 200 }}
            unmountOnExit
          >
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <NewItemCard
                type="new"
                title={itemOptions?.newItem?.title}
                url={itemOptions?.newItem?.url}
              />
            </Grid>
          </Fade>
          <Fade
            in={!itemOptions?.authUser}
            mountOnEnter
            timeout={{ enter: 200, exit: 200 }}
            unmountOnExit
          >
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <SignUpCard type="signup" />
            </Grid>
          </Fade>
          <CardList
            isAdmin={isAdmin}
            items={courses}
            itemOptions={itemOptions}
          />
        </Grid>
        <Footer />
      </MoPage>
    </Container>
  );
};

export default CoursesPage;
