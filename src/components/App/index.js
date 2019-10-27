import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import PasswordForgot from "../PasswordForgot";
import Home from "../Home";
import Account from "../Account";
import Admin from "../Admin";

import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			authUser: null
		};
	}

	componentDidMount() {
		this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
			authUser
				? this.setState({ authUser })
				: this.setState({ authUser: null });
		});
	}

	componentWillUnmount() {
		this.listener();
	}

	render() {
		return (
			<Router>
				<div>
					<Navigation authUser={this.state.authUser} />
					<hr />

					<Route exact path={ROUTES.LANDING} component={LandingPage} />
					<Route path={ROUTES.SIGN_UP} component={SignUp} />
					<Route path={ROUTES.SIGN_IN} component={SignIn} />
					<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgot} />
					<Route path={ROUTES.HOME} component={Home} />
					<Route path={ROUTES.ACCOUNT} component={Account} />
					<Route path={ROUTES.ADMIN} component={Admin} />
				</div>
			</Router>
		);
	}
}

export default withFirebase(App);
