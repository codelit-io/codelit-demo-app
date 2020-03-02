import React from "react";
import * as ROUTES from "../../../constants/routes";
import { Link } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";
import * as ROLES from "../../../constants/roles";

const NavigationAuth = ({ authUser }) => (
	<List>
		<ListItem button component={Link} to={ROUTES.HOME.path}>
			Home
		</ListItem>
		<ListItem button component={Link} to={ROUTES.ACCOUNT.path}>
			My Account
		</ListItem>
		{authUser.roles && !!authUser.roles[ROLES.ADMIN] && (
			<ListItem button component={Link} to={ROUTES.ACCOUNT.path}>
				Admin
			</ListItem>
		)}
	</List>
);

export default NavigationAuth;
