import React, { useState } from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Button, SwipeableDrawer, List, ListItem } from "@material-ui/core";
import { DrawerList } from "../shared/Drawer/DrawerList";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto"
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: 120,
			"&:focus": {
				width: 200
			}
		}
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	appBar: {
		boxShadow: "none"
	}
}));

const Navigation = () => {
	const [state, setState] = useState({
		isDrawerOpen: false
	});

	const toggleDrawer = isDrawerOpen => {
		setState({ ...state, isDrawerOpen });
	};

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static" color="default" className={classes.appBar}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
						onClick={() => toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>
					<SwipeableDrawer
						anchor="left"
						open={state.isDrawerOpen}
						onClose={() => toggleDrawer(false)}
						onOpen={() => toggleDrawer(true)}
					>
						<AuthUserContext.Consumer>
							{authUser =>
								authUser ? <NavigationAuth /> : <NavigationNonAuth />
							}
						</AuthUserContext.Consumer>
					</SwipeableDrawer>

					<Typography className={classes.title} variant="h6" noWrap>
						<Link
							to={ROUTES.LANDING}
							style={{ color: "black", textDecoration: "none" }}
						>
							Tool it
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
				</Toolbar>
			</AppBar>
		</div>
	);
};

const NavigationAuth = () => {
	const classes = useStyles();

	return (
		<List>
			<ListItem>
				<Button className={classes.button}>
					<Link
						to={ROUTES.ACCOUNT}
						style={{ color: "black", textDecoration: "none" }}
					>
						Account
					</Link>
				</Button>
			</ListItem>
			<ListItem>
				<Button className={classes.button}>
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
};

const NavigationNonAuth = () => {
	const classes = useStyles();
	return (
		<Button className={classes.button}>
			<Link
				to={ROUTES.SIGN_IN}
				style={{ color: "black", textDecoration: "none" }}
			>
				Sign In
			</Link>
		</Button>
	);
};

export default Navigation;
