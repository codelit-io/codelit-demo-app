import React, { useState } from "react";
import { AuthUserContext } from "../../Session";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import NavigationAuth from "../NavigationAuth";
import NavigationNonAuth from "../NavigationNonAuth";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
	menuButton: {
		marginRight: theme.spacing(2)
	}
});

const MoDrawer = classes => {
	const [state, setState] = useState({
		isDrawerOpen: false
	});

	const toggleDrawer = isDrawerOpen => {
		setState({ ...state, isDrawerOpen });
	};

	return (
		<>
			<IconButton
				edge="start"
				color="inherit"
				aria-label="open drawer"
				onClick={() => toggleDrawer(true)}
			>
				<MenuIcon />
			</IconButton>
			<Drawer
				anchor="right"
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
								<NavigationNonAuth />
							</div>
						)
					}
				</AuthUserContext.Consumer>
			</Drawer>
		</>
	);
};

export default withStyles(styles)(MoDrawer);
