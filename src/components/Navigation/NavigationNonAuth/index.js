import React from "react";
import * as ROUTES from "../../../constants/routes";
import { Link } from "react-router-dom";
import { List, ListItem, Button } from "@material-ui/core";

const NavigationNonAuth = () => (
	<List>
		<ListItem>
			<Button>
				<Link
					to={ROUTES.SIGN_IN}
					style={{ color: "black", textDecoration: "none" }}
				>
					Sign In
				</Link>
			</Button>
		</ListItem>
		<ListItem>
			<Button>
				<Link
					to={ROUTES.SIGN_UP}
					style={{ color: "black", textDecoration: "none" }}
				>
					Sign Up
				</Link>
			</Button>
		</ListItem>
	</List>
);

export default NavigationNonAuth;
