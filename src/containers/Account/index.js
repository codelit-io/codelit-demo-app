import React from "react";

import { PasswordForgetForm } from "../../components/PasswordForgot";
import PasswordChangeForm from "../../components/PasswordChange";
import { withAuthorization, AuthUserContext } from "../../components/Session";

import PageCard from "../../components/shared/PageCard";
import PageHeader from "../../components/shared/PageHeader";

const AccountPage = () => (
	<AuthUserContext.Consumer>
		{authUser => (
			<>
				<PageHeader title={authUser.displayName} />
				<PageCard img="" title={authUser.email}>
					{authUser && authUser.roles.ADMIN && (
						<>
							<h4>Admin</h4>
						</>
					)}
					<PasswordForgetForm />
					<PasswordChangeForm />
				</PageCard>
			</>
		)}
	</AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
