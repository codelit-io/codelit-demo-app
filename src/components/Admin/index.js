/* Refactor using hooks */

import React, { useState, useEffect } from "react";

import { withFirebase } from "../Firebase";

const AdminPage = props => {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const UserList = ({ users }) => (
		<ul>
			{users.map(user => (
				<li key={user.uid}>
					<p>
						<strong>ID:</strong> {user.uid}
					</p>
					<p>
						<strong>Email:</strong> {user.email}
					</p>
					<p>
						<strong>Username:</strong> {user.username}
					</p>
				</li>
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

export default withFirebase(AdminPage);
