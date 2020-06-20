/**
 *
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName App Component 🥇
 *
 *
 * Entry component to the app and does the following
 *
 *  - lazy loads pages/containers
 *  - Handles routing for app
 *  - Provides the app with Material-UI theme instance
 *  - Renders App navigation
 *  - Suspense and loading
 */
import React, { Suspense, lazy } from "react";

import * as ROUTES from "constants/routes";
import * as Sentry from "@sentry/browser";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoSpinner from "components/library/MoSpinner";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { retry } from "utils/retryLazyImports";

const Navigation = lazy(() =>
  retry(() => import("components/shared/Navigation"))
);
const Account = lazy(() => retry(() => import("containers/Account")));
const AdminPage = lazy(() => retry(() => import("containers/AdminPage")));
const Container = lazy(() =>
  retry(() => import("@material-ui/core/Container"))
);
const Home = lazy(() => retry(() => import("containers/Home")));
const LandingPage = lazy(() => retry(() => import("containers/Landing")));
const NotFound = lazy(() => retry(() => import("components/shared/NotFound")));
const PasswordForgot = lazy(() =>
  retry(() => import("components/shared/PasswordForgot"))
);
const Playground = lazy(() => retry(() => import("containers/Playground")));
const Course = lazy(() => retry(() => import("containers/Course")));
const Courses = lazy(() => retry(() => import("containers/Courses")));
const Question = lazy(() => retry(() => import("containers/Question")));
const SignUp = lazy(() => retry(() => import("containers/SignUp")));
const SignIn = lazy(() => retry(() => import("containers/SignIn")));

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
        <Container maxWidth="lg">
          <Navigation />
          <Switch>
            <Route path={ROUTES.ADMIN.path} component={AdminPage} />
            <Route path={ROUTES.ACCOUNT.path} component={Account} />
            <Route path={ROUTES.HOME.path} component={Home} />
            <Route exact path={ROUTES.LANDING.path} component={LandingPage} />
            <Route exact path={ROUTES.NOT_FOUND.path} component={NotFound} />

            <Route path={ROUTES.SIGN_IN.path} component={SignIn} />
            <Route path={ROUTES.SIGN_UP.path} component={SignUp} />
            <Route
              path={ROUTES.PASSWORD_FORGET.path}
              component={PasswordForgot}
            />
            <Route path={ROUTES.PLAYGROUND.path} component={Playground} />
            <Route exact path={ROUTES.COLLECTIONS.path} component={Courses} />
            <Route
              exact
              path={ROUTES.COLLECTIONS.path + "/:collection"}
              component={Course}
            />
            <Route
              path={ROUTES.COLLECTIONS.path + "/:collection/:questionId"}
              component={Question}
            />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Suspense>
    </Router>
  </ThemeProvider>
);

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://2cb4b0fa634941a69b5bdd868a07a024@sentry.io/1878459"
  });
}

export default App;
