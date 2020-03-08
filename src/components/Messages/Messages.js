import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { AuthUserContext } from "../Session";
import MessageList from "./MessageList";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Spinner from "../shared/Spinner";
import { withFirebase } from "../Firebase";
import MoTextarea from "../shared/MoTextarea";

class Messages extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
			loading: false,
			messages: [],
			limit: 15
		};
	}

	componentDidMount() {
		this.onListenForMessages();
	}

	onListenForMessages = () => {
		this.setState({ loading: true });

		this.unsubscribe = this.props.firebase
			.messages()
			.orderBy("createdAt", "desc")
			.limit(this.state.limit)
			.onSnapshot(snapshot => {
				if (snapshot.size) {
					let messages = [];
					snapshot.forEach(doc =>
						messages.push({ ...doc.data(), uid: doc.id })
					);
					this.setState({
						messages: messages.reverse(),
						loading: false
					});
				} else {
					this.setState({ messages: null, loading: false });
				}
			});
	};

	componentWillUnmount() {
		this.unsubscribe();
	}

	onChangeText = event => {
		this.setState({ text: event });
	};

	onCreateMessage = (event, authUser) => {
		if (this.state.text) {
			this.props.firebase.messages().add({
				text: this.state.text,
				userId: authUser.uid,
				createdAt: this.props.firebase.fieldValue.serverTimestamp()
			});

			this.setState({ text: "" });
		}
		event.preventDefault();
	};

	onEditMessage = (message, text) => {
		const { uid, ...messageSnapshot } = message;

		this.props.firebase.message(message.uid).update({
			...messageSnapshot,
			text,
			editedAt: this.props.firebase.fieldValue.serverTimestamp()
		});
	};

	onRemoveMessage = uid => {
		this.props.firebase.message(uid).delete();
	};

	onNextPage = () => {
		this.setState(
			state => ({ limit: state.limit + 15 }),
			this.onListenForMessages
		);
	};

	render() {
		const { text, messages, loading } = this.state;

		return (
			<AuthUserContext.Consumer>
				{authUser => (
					<div>
						{loading && <Spinner loading={loading} />}
						<h1> Upcoming new features</h1>
						{messages && (
							<MessageList
								authUser={authUser}
								messages={messages}
								onEditMessage={this.onEditMessage}
								onRemoveMessage={this.onRemoveMessage}
							/>
						)}

						{!messages && <div>There are no messages ...</div>}
						{!loading && messages && (
							<Button variant="contained" onClick={this.onNextPage}>
								<ExpandMoreIcon />
								More
							</Button>
						)}
						<form onSubmit={event => this.onCreateMessage(event, authUser)}>
						<MoTextarea type="text" value={text} onChange={this.onChangeText} />
							<Button variant="contained" color="primary" type="submit">
								Post <PostAddIcon />
							</Button>
						</form>
					</div>
				)}
			</AuthUserContext.Consumer>
		);
	}
}

export default withFirebase(Messages);
