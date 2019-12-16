// Moved to Navigation
// TODO implement drawer back in here
import React, { useState } from "react";
import { DrawerList } from "./DrawerList";
import { SwipeableDrawer } from "@material-ui/core";

export const Drawer = () => {
	const [state, setState] = useState({
		isDrawerOpen: false
	});

	const toggleDrawer = isDrawerOpen => {
		setState({ ...state, isDrawerOpen });
	};

	return (
		<SwipeableDrawer
			anchor="left"
			open={state.isDrawerOpen}
			onClose={() => toggleDrawer(false)}
			onOpen={() => toggleDrawer(true)}
		>
			{DrawerList()}
		</SwipeableDrawer>
	);
};
