import React from "react";

import { PasswordForgetForm } from "../../components/PasswordForgot";
import PasswordChangeForm from "../../components/PasswordChange";
import { withAuthorization, AuthUserContext } from "../../components/Session";

const AccountPage = () => (
	<AuthUserContext.Consumer>
		{authUser => (
			<div>
				<h1>{authUser.displayName}</h1>
				<p>{authUser.email}</p>
				<PasswordForgetForm />
				<PasswordChangeForm />
			</div>
		)}
	</AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
