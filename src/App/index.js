import React, { Suspense, lazy } from "react";

import * as ROUTES from "../constants/routes";
import * as Sentry from "@sentry/browser";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoSpinner from "../components/shared/MoSpinner";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { withAuthentication } from "../components/Session";

const Navigation = lazy(() => import("../components/Navigation"));
const Account = lazy(() => import("../containers/Account"));
const Admin = lazy(() => import("../containers/Admin"));
const Container = lazy(() => import("@material-ui/core/Container"));
const Home = lazy(() => import("../containers/Home"));
const LandingPage = lazy(() => import("../containers/Landing"));
const NotFound = lazy(() => import("../components/NotFound"));
const PasswordForgot = lazy(() => import("../components/PasswordForgot"));
const Playground = lazy(() => import("../containers/Playground"));
const Collection = lazy(() => import("../containers/Collection"));
const Courses = lazy(() => import("../containers/Courses"));
const Question = lazy(() => import("../containers/Question"));
const SignUp = lazy(() => import("../containers/SignUp"));
const SignIn = lazy(() => import("../containers/SignIn"));

const App = props => (
  <ThemeProvider theme={theme}>
    <Router>
      <Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
        <Container style={{ height: "100%", maxHeight: "100%" }}>
          <Navigation {...props} />
          <Switch>
            <Route path={ROUTES.ADMIN.path} component={Admin} />
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
              component={Collection}
            />
            <Route
              exact
              path={ROUTES.COLLECTIONS.path + "/:collection/:question"}
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

export default withAuthentication(App);
