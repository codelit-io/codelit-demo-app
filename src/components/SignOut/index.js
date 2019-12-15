import React from "react";

import { withFirebase } from "../Firebase";

import { Button } from '@material-ui/core';

const SingOutButton = ({ firebase }) => (
	<Button type="button" onClick={firebase.signOut}>
		Sign Out
	</Button>
);

export default withFirebase(SingOutButton);
