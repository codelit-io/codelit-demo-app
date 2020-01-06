import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import Spinner from "../../components/shared/Spinner";

const Navigation = lazy(() => import("../Navigation"));
const LandingPage = lazy(() => import("../../containers/Landing"));
const SignUp = lazy(() => import("../../containers/SignUp"));
const SignIn = lazy(() => import("../../containers/SignIn"));
const PasswordForgot = lazy(() => import("../PasswordForgot"));
const Home = lazy(() => import("../../containers/Home"));
const Account = lazy(() => import("../../containers/Account"));
const Admin = lazy(() => import("../../containers/Admin"));
const BuildCourse = lazy(() => import("../../containers/Courses/BuildCourse"));
const Container = lazy(() => import("@material-ui/core/Container"));
const Courses = lazy(() => import("../../containers/Courses"));
const Learn = lazy(() => import("../../containers/Learn"));

const App = () => (
	<Router>
		<Suspense fallback={<Spinner loading={true} color="primary" />}>
			<Navigation />
			<Container maxWidth="xl" className="container">
				<Switch>
					<Route exact path={ROUTES.LANDING.path} component={LandingPage} />
					<Route path={ROUTES.SIGN_UP.path} component={SignUp} />
					<Route path={ROUTES.SIGN_IN.path} component={SignIn} />
					<Route
						path={ROUTES.PASSWORD_FORGET.path}
						component={PasswordForgot}
					/>
					<Route path={ROUTES.HOME.path} component={Home} />
					<Route path={ROUTES.ACCOUNT.path} component={Account} />
					<Route path={ROUTES.ADMIN.path} component={Admin} />
					<Route exact path={ROUTES.LEARN.path} component={Learn} />
					<Route
						exact
						path={ROUTES.LEARN.path + "/:course"}
						component={Courses}
					/>
					<Route
						exact
						path={ROUTES.LEARN.path + "/:course/:topic"}
						component={BuildCourse}
					/>
					<Route
						exact
						path={ROUTES.LEARN.path + "/:course/:topic/:subTopic"}
						component={BuildCourse}
					/>
				</Switch>
			</Container>
		</Suspense>
	</Router>
);

export default withAuthentication(App);
