/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Admin container page 🎒
 *
 * Admin page grabs a list of courses from firebase and routes
 * admin users to the admin sub pages (users and collections)
 *
 * @param {Class} history - Firebase class provides access to authUser and db
 * @withEmailVerification - HOC provides email verification stuff
 * @returns - returns a lesson list on the left column and course tracking info on the right column
 *
 * @see Link [Admin Page](https://moskool.com/admin)
 *
 */

import React, { Suspense, lazy } from "react";

import * as ROUTES from "constants/routes";
import { ADMIN_PAGE } from "constants/i18n";
import { Switch, Route } from "react-router-dom";
import { UserList } from "components/shared/Users";
import { UserItem } from "components/shared/Users";
import { withEmailVerification } from "components/shared/Session";
import MoPage from "components/library/MoPage";
import MoSpinner from "components/library/MoSpinner";
import MoTabs from "./MoTabs";
import Container from "@material-ui/core/Container";
import Navigation from "components/shared/Navigation";
import useGlobal from "store";

const Collection = lazy(() => import("./Collection"));
const AdminCourses = lazy(() => import("./Collection/AdminCourses"));

const tabItems = [
  { name: ADMIN_PAGE.COURSES, path: "courses" },
  { name: ADMIN_PAGE.USERS, path: "users" }
];

const AdminPage = ({ history }) => {
  const [{ authUser, firebase }] = useGlobal();

  const handleTabChange = path => {
    history.push(`${ROUTES.ADMIN_COLLECTIONS.path}/${path}`);
  };

  return (
    <Container maxWidth="lg">
      <Navigation authUser={authUser} firebase={firebase} />
      <MoPage title={ADMIN_PAGE.PAGE_TITLE} isLoading={false}>
        <MoTabs
          handleTabChange={path => handleTabChange(path)}
          tabItems={tabItems}
        ></MoTabs>
        <Suspense
          fallback={<MoSpinner isLoading={true} color="primary" />}
        ></Suspense>
        <Switch>
          <Route
            exact
            path={ROUTES.ADMIN_COURSES.path}
            component={AdminCourses}
          />
          <Route
            exact
            path={ROUTES.ADMIN_COURSES.path + "/:collection"}
            component={Collection}
          />
          <Route exact path={ROUTES.ADMIN_DETAILS.path} component={UserList} />
          <Route exact path={ROUTES.ADMIN_USERS.path} component={UserList} />
          <Route
            exact
            path={ROUTES.ADMIN_USERS.path + "/:id"}
            component={UserItem}
          />
        </Switch>
      </MoPage>
    </Container>
  );
};

export default withEmailVerification(AdminPage);
