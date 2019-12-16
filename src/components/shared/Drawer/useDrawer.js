import { useState } from "react";

const useDrawer = callback => {
	const [isDrawerOpen, useValue] = useState(false);

	const toggleDrawer = event => {
		if (event) event.preventDefault();
		callback();
	};

	return {
		toggleDrawer,
		isDrawerOpen
	};
};

export default useDrawer;
