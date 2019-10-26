import React from "react";
import { BrowserRouter as Router ,Route} from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForgot from '../PasswordForgot';
import Home from '../Home';
import Account from '../Account';
import Admin from '../Admin';


import * as ROUTES from '../../constants/routes';

const App = () => (
	<Router>
		<div>
			<Navigation />

            <hr />

            <Route exact path={ROUTES.LANDING}  component={LandingPage}/>
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgot} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
            <Route path={ROUTES.ADMIN} component={Admin} />

		</div>
	</Router>
);

export default App;
