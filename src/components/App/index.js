import React, { Suspense, lazy } from "react";

import * as ROUTES from "../../constants/routes";
import * as Sentry from "@sentry/browser";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Spinner from "../../components/shared/Spinner";

import { withAuthentication } from "../Session";

const Navigation = lazy(() => import("../Navigation"));
const LandingPage = lazy(() => import("../../containers/Landing"));
const SignUp = lazy(() => import("../../containers/SignUp"));
const SignIn = lazy(() => import("../../containers/SignIn"));
const PasswordForgot = lazy(() => import("../PasswordForgot"));
const Home = lazy(() => import("../../containers/Home"));
const Account = lazy(() => import("../../containers/Account"));
const Admin = lazy(() => import("../../containers/Admin"));
const Topics = lazy(() => import("../../containers/Courses/Topics"));
const Container = lazy(() => import("@material-ui/core/Container"));
const Courses = lazy(() => import("../../containers/Courses"));
const Learn = lazy(() => import("../../containers/Learn"));
const NotFound = lazy(() => import("../../components/NotFound"));

const App = () => (
	<Router>
		<Suspense fallback={<Spinner loading={true} color="primary" />}>
			<Navigation />
			<Container maxWidth="xl" className="container">
				<Route exact path={ROUTES.LANDING.path} component={LandingPage} />
				<Route path={ROUTES.SIGN_UP.path} component={SignUp} />
				<Route path={ROUTES.SIGN_IN.path} component={SignIn} />
				<Route path={ROUTES.PASSWORD_FORGET.path} component={PasswordForgot} />
				<Route path={ROUTES.HOME.path} component={Home} />
				<Route path={ROUTES.ACCOUNT.path} component={Account} />
				<Route exact path={ROUTES.LEARN.path} component={Learn} />
				<Route
					exact
					path={ROUTES.LEARN.path + "/:course"}
					component={Courses}
				/>
				<Route
					exact
					path={ROUTES.LEARN.path + "/:course/:topic"}
					component={Topics}
				/>
				<Route
					exact
					path={ROUTES.LEARN.path + "/:course/:topic/:subTopic"}
					component={Topics}
				/>
				<Route exact path={ROUTES.NOT_FOUND.path} component={NotFound} />

				<Route path={ROUTES.ADMIN.path} component={Admin} />
			</Container>
		</Suspense>
	</Router>
);

if (process.env.NODE_ENV === "production") {
	Sentry.init({
		dsn: "https://2cb4b0fa634941a69b5bdd868a07a024@sentry.io/1878459"
	});
}

export default withAuthentication(App);
