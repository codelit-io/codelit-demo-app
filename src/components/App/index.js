import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../../containers/Landing";
import SignUp from "../../containers/SignUp";
import SignIn from "../../containers/SignIn";
import PasswordForgot from "../PasswordForgot";
import Home from "../../containers/Home";
import Account from "../../containers/Account";
import Admin from "../../containers/Admin";

import * as ROUTES from "../../constants/routes";
import BuildCourse from "../../containers/Courses/BuildCourse";
import Container from "@material-ui/core/Container";

import Courses from "../../containers/Courses";
import Learn from "../../containers/Learn";
import { withAuthentication } from "../Session";

const App = () => (
	<Router>
		<Navigation />
		<Container maxWidth="xl" className="container">
			<Switch>
				<Route exact path={ROUTES.LANDING} component={LandingPage} />
				<Route path={ROUTES.SIGN_UP} component={SignUp} />
				<Route path={ROUTES.SIGN_IN} component={SignIn} />
				<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgot} />
				<Route path={ROUTES.HOME} component={Home} />
				<Route path={ROUTES.ACCOUNT} component={Account} />
				<Route path={ROUTES.ADMIN} component={Admin} />
				<Route exact path={ROUTES.LEARN} component={Learn}/>
				<Route exact path={ROUTES.LEARN + "/:course"} component={Courses}/>
				<Route exact path={ROUTES.LEARN + "/:course/:topic"} component={BuildCourse} />
			</Switch>
			{/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
		</Container>
	</Router>
);

export default withAuthentication(App);
