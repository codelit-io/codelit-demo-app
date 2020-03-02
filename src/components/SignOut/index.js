import React from "react";

import { withFirebase } from "../Firebase";

import MenuItem from "@material-ui/core/MenuItem";

const SingOutButton = ({ firebase, handleClose }) => (
	<MenuItem
		button
		onClick={() => {
			firebase.signOut();
			handleClose();
		}}
	>
		Sign Out
	</MenuItem>
);

export default withFirebase(SingOutButton);
