/* Refactor using hooks */

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { withAuthorization } from "../Session";

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
		<ul>
			{users.map(user => (
				<Card key={user.uid} className={classes.card}>
					<CardContent>
						<p>
							<strong>ID:</strong> {user.uid}
						</p>
						<p>
							<strong>Email:</strong> {user.email}
						</p>
						<p>
							<strong>Username:</strong> {user.username}
						</p>
					</CardContent>
				</Card>
			))}
		</ul>
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

			{loading && <div>Loading ...</div>}

			<UserList users={users} />
		</div>
	);
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AdminPage);
