import React, { useState } from "react";
import { AuthUserContext } from "../../Session";
import { IconButton, SwipeableDrawer, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavigationAuth from "../NavigationAuth";
import NavigationNonAuth from "../NavigationNonAuth";

const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2)
	}
}));

const Drawer = () => {
	const [state, setState] = useState({
		isDrawerOpen: false
	});

	const toggleDrawer = isDrawerOpen => {
		setState({ ...state, isDrawerOpen });
	};

	const classes = useStyles();

	return (
		<div>
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
						authUser ? (
							<div
								onClick={() => toggleDrawer(false)}
								onKeyDown={() => toggleDrawer(false)}
							>
								<NavigationAuth authUser={authUser} />
							</div>
						) : (
							<div
								onClick={() => toggleDrawer(false)}
								onKeyDown={() => toggleDrawer(false)}
							>
								<NavigationNonAuth/>
							</div>
						)
					}
				</AuthUserContext.Consumer>
			</SwipeableDrawer>
		</div>
	);
};

export default Drawer;
