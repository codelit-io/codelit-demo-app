/* Refactor using hooks */

import React, { useState, useEffect } from "react";
import * as ROLES from "../../constants/roles";
import { compose } from "recompose";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import MoshCard from "../../components/shared/MoCard";
import { withAuthorization } from "../../components/Session";
import { withFirebase } from "../../components/Firebase";
import Spinner from "../../components/shared/Spinner";

const useStyles = makeStyles({
	card: {
		minWidth: 275
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)"
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
});

const AdminPage = props => {
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const UserList = ({ users }) => (
		<Grid container spacing={3}>
			{users.map(user => (
				<Grid item sm={6} md={3} xs={12} key={user.uid}>
					<MoshCard
						className={classes.card}
						topic={{
							label: user.username,
							desc: user.email
						}}
					></MoshCard>
				</Grid>
			))}
		</Grid>
	);

	useEffect(() => {
		setLoading(true);
		props.firebase.users().on("value", snapshot => {
			const usersObject = snapshot.val();

			const usersList =
				usersObject &&
				Object.keys(usersObject).map(key => ({
					...usersObject[key],
					uid: key
				}));

			setUsers(usersList);
			setLoading(false);
		});

		return () => {
			props.firebase.users().off();
		};
	}, [props]);

	return (
		<div>
			<h1>Users</h1>
			<p>The Admin Page is accessible by every signed in admin user.</p>
			{<Spinner loading={loading} color="primary" />}

			<UserList users={users} />
		</div>
	);
};

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];
export default compose(withAuthorization(condition), withFirebase)(AdminPage);
