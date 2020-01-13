import React from "react";
import * as ROUTES from "../../../constants/routes";
import { Link } from "react-router-dom";
import SignOutButton from "../../SignOut";
import { List, ListItem, Button } from "@material-ui/core";
import * as ROLES from '../../../constants/roles';

const NavigationAuth = ({ authUser }) => (
	<List>
		<ListItem>
			<Button>
				<Link
					to={ROUTES.HOME.path}
					style={{ color: "black", textDecoration: "none" }}
				>
					Home
				</Link>
			</Button>
		</ListItem>
		<ListItem>
			<Button>
				<Link
					to={ROUTES.ACCOUNT.path}
					style={{ color: "black", textDecoration: "none" }}
				>
					Account
				</Link>
			</Button>
		</ListItem>
		{authUser.roles && !!authUser.roles[ROLES.ADMIN] && (
			<ListItem>
				<Button>
					<Link
						to={ROUTES.ADMIN.path}
						style={{ color: "black", textDecoration: "none" }}
					>
						Admin
					</Link>
				</Button>
			</ListItem>
		)}
		<ListItem>
			<SignOutButton />
		</ListItem>
	</List>
);

export default NavigationAuth;
