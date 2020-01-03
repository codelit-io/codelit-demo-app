import React from "react";
import * as ROUTES from "../../constants/routes";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

import {
	AppBar,
	Toolbar,
	Typography,
	InputBase,
	Avatar
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import { AuthUserContext } from "../Session";

const Navigation = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static" color="default" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Drawer />
					<Typography className={classes.title} variant="h6" noWrap>
						<Link
							to={ROUTES.LANDING.path}
							style={{ color: "#383c40", textDecoration: "none" }}
						>
							Mo Skool
						</Link>
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>
					<AuthUserContext.Consumer>
						{authUser => <Link to={ROUTES.ACCOUNT.path}><Avatar alt="Me" src={authUser && authUser.photoURL} /></Link> }
					</AuthUserContext.Consumer>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navigation;
