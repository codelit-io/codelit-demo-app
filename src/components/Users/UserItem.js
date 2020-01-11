import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import { withFirebase } from "../Firebase";

class UserItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			user: null,
			...props.location.state
		};
	}

	componentDidMount() {
		console.log(this.state.user)
		if (this.state.user) {
			return;
		}

		this.setState({ loading: true });
		console.log(this.props.match.params.id)
		this.unsubscribe = this.props.firebase
			.user(this.props.match.params.id)
			.onSnapshot(snapshot => {
				console.log(snapshot)
				this.setState({
					user: snapshot.data(),
					loading: false
				});
			});
		debugger;
	}

	componentWillUnmount() {
		this.unsubscribe && this.unsubscribe();
	}

	onSendPasswordResetEmail = () => {
		this.props.firebase.passwordReset(this.state.user.email);
	};

	render() {
		const { user, loading } = this.state;

		return (
			<div>
				<h2>User ({this.props.match.params.id})</h2>
				{loading && <div>Loading ...</div>}

				{user && (
					<div>
						<span>
							<strong>ID:</strong> {user.uid}
						</span>
						<span>
							<strong>Email:</strong> {user.email}
						</span>
						<span>
							<strong>Username:</strong> {user.username}
						</span>
						<span>
							<Button type="button" onClick={this.onSendPasswordResetEmail}>
								Send Password Reset
							</Button>
						</span>
					</div>
				)}
			</div>
		);
	}
}

export default withFirebase(UserItem);
