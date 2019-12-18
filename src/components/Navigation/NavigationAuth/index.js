import React from "react";
import * as ROUTES from "../../../constants/routes";
import { Link } from "react-router-dom";
import SignOutButton from "../../SignOut";
import { List, ListItem, Button } from "@material-ui/core";

const NavigationAuth = () => (
	<List>
		<ListItem>
			<Button>
				<Link
					to={ROUTES.ACCOUNT}
					style={{ color: "black", textDecoration: "none" }}
				>
					Account
				</Link>
			</Button>
		</ListItem>
		<ListItem>
			<Button>
				<Link
					to={ROUTES.ADMIN}
					style={{ color: "black", textDecoration: "none" }}
				>
					Admin
				</Link>
			</Button>
		</ListItem>
		<ListItem>
			<SignOutButton />
		</ListItem>
	</List>
);

export default NavigationAuth;
